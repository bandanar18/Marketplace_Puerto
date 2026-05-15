import { useState, useEffect, useRef } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { Send, User, Search } from 'lucide-react';

export default function ChatPage() {
  const [conversations, setConversations] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef();

  const fetchRecent = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/messages/recent`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setConversations(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchConversation = async (contactId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/messages/conversation/${contactId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        setMessages(await response.json());
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRecent();
    const interval = setInterval(() => {
      if (selectedContact) fetchConversation(selectedContact.id);
      fetchRecent();
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedContact]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedContact) return;

    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/messages/send`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ receiverId: selectedContact.id, content: newMessage })
      });
      if (response.ok) {
        setNewMessage('');
        fetchConversation(selectedContact.id);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppLayout>
      <div className="container" style={{ padding: '32px 0', height: 'calc(100vh - 120px)' }}>
        <div style={{ 
          background: 'white', borderRadius: '32px', height: '100%', 
          display: 'grid', gridTemplateColumns: '320px 1fr', 
          overflow: 'hidden', boxShadow: 'var(--shadow-subtle)',
          border: '1px solid var(--color-mist)'
        }}>
          {/* Sidebar */}
          <div style={{ borderRight: '1px solid var(--color-mist)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid var(--color-mist)' }}>
              <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Mensajes</h2>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-stone)' }} />
                <input 
                  placeholder="Buscar chat..." 
                  style={{ width: '100%', padding: '10px 12px 10px 36px', borderRadius: '12px', border: '1px solid var(--color-mist)', fontSize: '14px' }}
                />
              </div>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {conversations.map(conv => (
                <div 
                  key={conv.contact.id} 
                  onClick={() => setSelectedContact(conv.contact)}
                  style={{ 
                    padding: '16px 24px', cursor: 'pointer',
                    background: selectedContact?.id === conv.contact.id ? 'var(--color-fog)' : 'transparent',
                    borderLeft: selectedContact?.id === conv.contact.id ? '4px solid var(--color-carbon)' : '4px solid transparent',
                    display: 'flex', gap: '12px', alignItems: 'center'
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-mist)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={24} color="var(--color-slate)" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>{conv.contact.firstName} {conv.contact.lastName}</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-slate)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {conv.lastMessage.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div style={{ display: 'flex', flexDirection: 'column', background: '#fafafa' }}>
            {selectedContact ? (
              <>
                <div style={{ padding: '16px 32px', background: 'white', borderBottom: '1px solid var(--color-mist)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-mist)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={20} color="var(--color-slate)" />
                  </div>
                  <div style={{ fontWeight: '800' }}>{selectedContact.firstName} {selectedContact.lastName}</div>
                </div>

                <div 
                  ref={scrollRef}
                  style={{ flex: 1, overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  {messages.map(msg => {
                    const isOwn = msg.senderId !== selectedContact.id;
                    return (
                      <div key={msg.id} style={{ 
                        alignSelf: isOwn ? 'flex-end' : 'flex-start',
                        maxWidth: '70%',
                        padding: '12px 18px',
                        borderRadius: isOwn ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                        background: isOwn ? 'var(--color-carbon)' : 'white',
                        color: isOwn ? 'white' : 'var(--color-carbon)',
                        boxShadow: 'var(--shadow-subtle)',
                        fontSize: '14px',
                        lineHeight: '1.5'
                      }}>
                        {msg.content}
                        <div style={{ fontSize: '10px', marginTop: '4px', textAlign: 'right', opacity: 0.7 }}>
                          {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ padding: '24px 32px', background: 'white', borderTop: '1px solid var(--color-mist)' }}>
                  <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '12px' }}>
                    <input 
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Escribe un mensaje..."
                      style={{ flex: 1, padding: '12px 20px', borderRadius: '16px', border: '1px solid var(--color-mist)', fontSize: '14px', outline: 'none' }}
                    />
                    <button type="submit" className="btn btn-primary" style={{ padding: '12px', borderRadius: '16px' }}>
                      <Send size={20} />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--color-slate)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-mist)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Send size={40} color="var(--color-stone)" />
                </div>
                <h3>Selecciona una conversación para empezar</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
