import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { HelpCircle, Plus, MessageSquare, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import TicketChat from '../../components/Support/TicketChat';

export default function SupportPage() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/support/tickets/my`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setTickets(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <AppLayout><div className="container">Cargando centro de ayuda...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Centro de Ayuda</h1>
            <p style={{ color: 'var(--color-slate)' }}>Gestiona tus tickets de soporte y consultas operativas.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowCreateForm(true)}>
            <Plus size={18} style={{ marginRight: '8px' }} />
            Nuevo Ticket
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: selectedTicket ? '350px 1fr' : '1fr', gap: '32px', transition: 'all 0.3s' }}>
          <div className="ticket-list">
            {tickets.map(t => (
              <div 
                key={t.id} 
                className={`card ${selectedTicket?.id === t.id ? 'active' : ''}`}
                onClick={() => setSelectedTicket(t)}
                style={{ 
                  padding: '20px', cursor: 'pointer', marginBottom: '16px', 
                  borderLeft: selectedTicket?.id === t.id ? '6px solid var(--color-rausch-coral)' : '1px solid var(--color-mist)',
                  background: selectedTicket?.id === t.id ? 'var(--color-fog)' : 'white'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--color-slate)' }}>{t.folio}</span>
                  <span style={{ 
                    fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '6px',
                    background: t.status === 'OPEN' ? '#e3f2fd' : '#e8f5e9',
                    color: t.status === 'OPEN' ? '#1976d2' : '#2e7d32'
                  }}>{t.status}</span>
                </div>
                <h4 style={{ margin: '0 0 8px 0' }}>{t.subject}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: 'var(--color-slate)' }}>
                  <Clock size={12} />
                  {new Date(t.updatedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
            
            {tickets.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', background: 'var(--color-fog)', borderRadius: '24px' }}>
                <HelpCircle size={48} color="var(--color-mist)" style={{ marginBottom: '16px' }} />
                <h3>¿En qué podemos ayudarte?</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-slate)' }}>Crea un ticket para reportar un problema o realizar una consulta.</p>
              </div>
            )}
          </div>

          {selectedTicket && (
            <div className="ticket-view">
              <TicketChat 
                ticketId={selectedTicket.id} 
                onClose={() => setSelectedTicket(null)} 
              />
            </div>
          )}
        </div>
      </div>

      {showCreateForm && (
        <CreateTicketModal 
          onClose={() => setShowCreateForm(false)} 
          onCreated={() => {
            setShowCreateForm(false);
            fetchTickets();
          }} 
        />
      )}
    </AppLayout>
  );
}

function CreateTicketModal({ onClose, onCreated }) {
  const [formData, setFormData] = useState({ subject: '', category: 'TECHNICAL', description: '', priority: 'MEDIUM' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/support/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(formData)
      });
      onCreated();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content card" style={{ maxWidth: '500px', padding: '40px' }}>
        <h2 style={{ marginBottom: '24px' }}>Nuevo Ticket de Soporte</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label className="form-label">Asunto</label>
            <input 
              type="text" className="form-control" placeholder="Ej. Problema con el pago #9921" required
              onChange={e => setFormData({...formData, subject: e.target.value})}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label className="form-label">Categoría</label>
              <select className="form-control" onChange={e => setFormData({...formData, category: e.target.value})}>
                <option value="TECHNICAL">Técnico</option>
                <option value="PAYMENT">Pagos</option>
                <option value="LOGISTICS">Logística</option>
                <option value="ACCOUNT">Cuenta</option>
              </select>
            </div>
            <div>
              <label className="form-label">Prioridad</label>
              <select className="form-control" onChange={e => setFormData({...formData, priority: e.target.value})}>
                <option value="LOW">Baja</option>
                <option value="MEDIUM">Media</option>
                <option value="HIGH">Alta</option>
                <option value="URGENT">Urgente</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: '32px' }}>
            <label className="form-label">Descripción del Problema</label>
            <textarea 
              className="form-control" style={{ height: '120px' }} required
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Abrir Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
}
