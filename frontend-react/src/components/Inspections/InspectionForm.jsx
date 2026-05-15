import { useState, useEffect } from 'react';
import { ClipboardCheck, Camera, Check, X } from 'lucide-react';

export default function InspectionForm({ orderId, templateId, onClose }) {
  const [template, setTemplate] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we'd fetch the specific template
    // For demo, we use a mock template
    setTemplate({
      id: templateId,
      name: 'Inspección de Carga General',
      questions: [
        { id: '1', text: '¿Empaque en buen estado?', type: 'select', options: ['SÍ', 'NO'] },
        { id: '2', text: '¿Sellos de seguridad intactos?', type: 'select', options: ['SÍ', 'NO'] },
        { id: '3', text: '¿Humedad detectada?', type: 'select', options: ['SÍ', 'NO'] },
        { id: '4', text: 'Observaciones generales', type: 'text' }
      ]
    });
    setLoading(false);
  }, [templateId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = Object.values(answers).includes('NO') ? 'FAIL' : 'PASS';
    const token = localStorage.getItem('token');
    
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/inspections/complete`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ orderId, templateId, answers, result }),
      });
      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Cargando checklist...</div>;

  return (
    <div className="modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      backdropFilter: 'blur(8px)'
    }}>
      <div className="modal-content card" style={{ width: '100%', maxWidth: '500px', padding: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: 'var(--color-rausch-coral)', padding: '12px', borderRadius: '16px' }}>
            <ClipboardCheck color="white" />
          </div>
          <h2 style={{ margin: 0 }}>{template.name}</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {template.questions.map(q => (
            <div key={q.id} style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>{q.text}</label>
              {q.type === 'select' ? (
                <div style={{ display: 'flex', gap: '12px' }}>
                  {q.options.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAnswers({...answers, [q.id]: opt})}
                      style={{
                        flex: 1, padding: '12px', borderRadius: '12px', border: '1px solid var(--color-mist)',
                        background: answers[q.id] === opt ? 'var(--color-carbon)' : 'white',
                        color: answers[q.id] === opt ? 'white' : 'var(--color-carbon)',
                        fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s'
                      }}
                    >
                      {opt === 'SÍ' ? <Check size={16} style={{marginRight: '8px'}} /> : <X size={16} style={{marginRight: '8px'}} />}
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <textarea 
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-mist)', height: '80px' }}
                  onChange={(e) => setAnswers({...answers, [q.id]: e.target.value})}
                />
              )}
            </div>
          ))}

          <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose} style={{ flex: 1 }}>Cancelar</button>
            <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Completar Inspección</button>
          </div>
        </form>
      </div>
    </div>
  );
}
