import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Package, MessageSquare, User, 
  Settings, Shield, ClipboardList, Database, 
  Truck, CreditCard, LifeBuoy, BarChart2, Briefcase
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const menuItems = {
    CUSTOMER: [
      { name: 'Mi Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { name: 'Mis Pedidos', path: '/profile', icon: Package }, // Or a dedicated orders page
      { name: 'Mensajes', path: '/chat', icon: MessageSquare },
      { name: 'Soporte', path: '/support', icon: LifeBuoy },
    ],
    STORE_OWNER: [
      { name: 'Panel de Tienda', path: '/store/dashboard', icon: BarChart2 },
      { name: 'Mis Servicios', path: '/store/my-services', icon: Briefcase },
      { name: 'Inventario WMS', path: '/wms/inventory', icon: Database },
      { name: 'Mensajes', path: '/chat', icon: MessageSquare },
      { name: 'Soporte', path: '/support', icon: LifeBuoy },
    ],
    ADMIN: [
      { name: 'Analítica', path: '/admin/analytics', icon: BarChart2 },
      { name: 'Auditoría', path: '/admin/audit', icon: Shield },
      { name: 'Configuración', path: '/admin/settings', icon: Settings },
      { name: 'Catálogos', path: '/admin/catalogs', icon: ClipboardList },
      { name: 'Mensajes', path: '/chat', icon: MessageSquare },
    ],
    OPERATOR: [
      { name: 'Validaciones', path: '/operator/dashboard', icon: LayoutDashboard },
      { name: 'Pagos', path: '/finances', icon: CreditCard },
      { name: 'Soporte', path: '/support', icon: LifeBuoy },
    ],
    AUDITOR: [
      { name: 'Seguridad', path: '/auditor/dashboard', icon: Shield },
      { name: 'Logs de Auditoría', path: '/admin/audit', icon: ClipboardList },
    ]
  };

  const currentItems = menuItems[user.role?.name] || [];

  return (
    <aside className="sidebar" style={{
      width: '260px',
      background: 'white',
      borderRight: '1px solid var(--color-mist)',
      height: 'calc(100vh - 80px)',
      position: 'sticky',
      top: '80px',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {currentItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link 
            key={item.path} 
            to={item.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              textDecoration: 'none',
              color: isActive ? 'var(--color-rausch-coral)' : 'var(--color-slate)',
              background: isActive ? 'var(--color-fog)' : 'transparent',
              fontWeight: isActive ? '700' : '500',
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
            className="sidebar-link"
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            {item.name}
          </Link>
        );
      })}
      
      <div style={{ marginTop: 'auto', padding: '16px', borderTop: '1px solid var(--color-mist)', fontSize: '12px', color: 'var(--color-stone)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></div>
          Sesión Activa
        </div>
        <strong>{user.firstName} {user.lastName}</strong>
      </div>
    </aside>
  );
}
