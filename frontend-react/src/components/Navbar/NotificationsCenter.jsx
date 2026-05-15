import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

export default function NotificationsCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchNotifications = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/notifications`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setNotifications(data);
        setUnreadCount(data.filter(n => !n.isRead).length);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, []);

  const markAllAsRead = async () => {
    const token = localStorage.getItem('token');
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/notifications/read-all`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchNotifications();
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  };

  return (
    <div className="notifications-wrapper" style={{ position: 'relative' }}>
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen && unreadCount > 0) markAllAsRead();
        }}
        style={{ border: 'none', background: 'none', cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', padding: '8px' }}
      >
        <Bell size={20} color="var(--color-slate)" />
        {unreadCount > 0 && (
          <span style={{ 
            position: 'absolute', top: '4px', right: '4px', 
            minWidth: '16px', height: '16px', background: 'var(--color-rausch-coral)', 
            color: 'white', fontSize: '10px', fontWeight: '800',
            borderRadius: '50%', border: '2px solid white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div style={{ 
          position: 'absolute', top: '48px', right: '0', 
          width: '320px', background: 'white', borderRadius: '24px', 
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)', padding: '20px', zIndex: 1000,
          border: '1px solid var(--color-mist)',
          maxHeight: '400px', overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '800' }}>Notificaciones</h4>
            {unreadCount > 0 && (
              <button onClick={markAllAsRead} style={{ fontSize: '12px', background: 'none', border: 'none', color: 'var(--color-slate)', cursor: 'pointer', fontWeight: '600' }}>
                Marcar leídas
              </button>
            )}
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {notifications.length === 0 ? (
              <p style={{ fontSize: '14px', color: 'var(--color-slate)', textAlign: 'center', padding: '20px 0' }}>
                No tienes notificaciones aún.
              </p>
            ) : (
              notifications.map(n => (
                <div key={n.id} style={{ 
                  padding: '12px', 
                  borderRadius: '16px', 
                  background: n.isRead ? 'transparent' : 'var(--color-fog)',
                  border: '1px solid #f0f0f0',
                  fontSize: '13px'
                }}>
                  <div style={{ fontWeight: '700', marginBottom: '2px' }}>{n.title}</div>
                  <div style={{ color: 'var(--color-slate)', lineHeight: '1.4' }}>{n.message}</div>
                  <div style={{ fontSize: '10px', color: 'var(--color-stone)', marginTop: '6px' }}>
                    {new Date(n.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
