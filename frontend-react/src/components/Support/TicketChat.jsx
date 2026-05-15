import { useState, useEffect, useRef } from 'react';
import { Send, User as UserIcon, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function TicketChat({ ticketId, onClose }) {
  const [ticket, setTicket] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchDetails();
  }, [ticketId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [ticket?.messages]);

  const fetchDetails = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/support/tickets/${ticketId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setTicket(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const token = localStorage.getItem('token');
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/support/tickets/${ticketId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ content: newMessage })
      });
      setNewMessage('');
      fetchDetails();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="card" style={{ padding: '40px', textAlign: 'center' }}>Abriendo chat...</div>;

  return (
    <div className="card chat-card" style={{ display: 'flex', flexDirection: 'column', height: '600px', padding: 0, overflow: 'hidden' }}>
      <div className="chat-header" style={{ padding: '20px 24px', background: 'var(--color-carbon)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><ArrowLeft size={20} /></button>
          <div>
            <h4 style={{ margin: 0, color: 'white' }}>{ticket.subject}</h4>
            <span style={{ fontSize: '11px', opacity: 0.7 }}>{ticket.folio} • {ticket.status}</span>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="chat-body" style={{ flex: 1, padding: '24px', overflowY: 'auto', background: 'var(--color-fog)' }}>
        <div className="system-message" style={{ background: 'white', padding: '16px', borderRadius: '16px', marginBottom: '24px', fontSize: '13px', border: '1px solid var(--color-mist)' }}>
          <strong>Descripción inicial:</strong><br />
          {ticket.description}
        </div>

        {ticket.messages.map(msg => (
          <div 
            key={msg.id} 
            style={{ 
              display: 'flex', 
              justifyContent: msg.author.id === ticket.createdBy.id ? 'flex-start' : 'flex-end',
              marginBottom: '16px'
            }}
          >
            <div style={{ 
              maxWidth: '80%', padding: '12px 16px', borderRadius: '16px',
              background: msg.author.id === ticket.createdBy.id ? 'white' : 'var(--color-rausch-coral)',
              color: msg.author.id === ticket.createdBy.id ? 'var(--color-carbon)' : 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '10px', marginBottom: '4px', opacity: 0.8, fontWeight: '700' }}>
                {msg.author.id === ticket.createdBy.id ? 'Tú' : 'Soporte Puerto'}
              </div>
              <div style={{ fontSize: '14px' }}>{msg.content}</div>
              <div style={{ fontSize: '9px', marginTop: '4px', textAlign: 'right', opacity: 0.6 }}>
                {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-footer" style={{ padding: '20px 24px', background: 'white', borderTop: '1px solid var(--color-mist)' }}>
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '12px' }}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Escribe un mensaje..." 
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            disabled={ticket.status === 'CLOSED'}
          />
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={ticket.status === 'CLOSED' || !newMessage.trim()}
            style={{ padding: '0 20px' }}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
