import { useState } from 'react';
import { X } from 'lucide-react';

export default function QuotationModal({ service, onClose }) {
  const [cargoDetails, setCargoDetails] = useState('');
  const [estimatedDate, setEstimatedDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/quotations/request`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          service: { id: service.id },
          store: { id: service.store.id },
          cargoDetails,
          estimatedDate: estimatedDate || null
        }),
      });

      if (!response.ok) throw new Error('Request failed');
      setSuccess(true);
      setTimeout(onClose, 2000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justify-content: center,
      zIndex: 1000
    }}>
      <div className="modal-content" style={{
        background: 'white',
        padding: '32px',
        borderRadius: '24px',
        width: '100%',
        maxWdith: '500px',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', right: '20px', top: '20px', border: 'none', background: 'none', cursor: 'pointer' }}>
          <X size={24} />
        </button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h2 style={{ color: 'var(--color-rausch-coral)' }}>¡Solicitud Enviada!</h2>
            <p>La tienda revisará los detalles y te contactará pronto.</p>
          </div>
        ) : (
          <>
            <h2 style={{ marginBottom: '8px' }}>Detalles de tu carga</h2>
            <p style={{ color: 'var(--color-slate)', marginBottom: '24px' }}>Cuéntale a {service.store.legalName} qué necesitas mover.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="input-group">
                <label style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>Descripción de la mercancía</label>
                <textarea 
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--color-stone)', borderRadius: '12px', minHeight: '120px' }}
                  placeholder="Ej: 20 pallets de repuestos automotrices, peso aprox 15 ton..."
                  value={cargoDetails}
                  onChange={(e) => setCargoDetails(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>Fecha estimada del servicio</label>
                <input 
                  type="date"
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--color-stone)', borderRadius: '12px' }}
                  value={estimatedDate}
                  onChange={(e) => setEstimatedDate(e.target.value)}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ height: '48px', marginTop: '16px' }}
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
