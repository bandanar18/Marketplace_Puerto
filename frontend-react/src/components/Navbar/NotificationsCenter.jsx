import { useState } from 'react';
import { Bell } from 'lucide-react';

export default function NotificationsCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  return (
    <div className="notifications-wrapper" style={{ position: 'relative' }}>
      <button 
        onClick={() => { setIsOpen(!isOpen); setHasUnread(false); }}
        style={{ border: 'none', background: 'none', cursor: 'pointer', position: 'relative' }}
      >
        <Bell size={20} color="var(--color-slate)" />
        {hasUnread && (
          <span style={{ 
            position: 'absolute', top: '-2px', right: '-2px', 
            width: '8px', height: '8px', background: 'var(--color-rausch-coral)', 
            borderRadius: '50%', border: '2px solid white' 
          }}></span>
        )}
      </button>

      {isOpen && (
        <div style={{ 
          position: 'absolute', top: '40px', right: '0', 
          width: '300px', background: 'white', borderRadius: '16px', 
          boxShadow: 'var(--shadow-subtle)', padding: '16px', zIndex: 1000,
          border: '1px solid #eee'
        }}>
          <h4 style={{ margin: '0 0 16px 0' }}>Notificaciones</h4>
          <div style={{ fontSize: '14px', color: 'var(--color-slate)' }}>
            <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
              <strong>¡Pago aprobado!</strong> Tu servicio de Almacenamiento está listo.
            </div>
            <div style={{ padding: '8px 0' }}>
              <strong>Nueva cotización:</strong> Revisa la oferta de Logística Global.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
