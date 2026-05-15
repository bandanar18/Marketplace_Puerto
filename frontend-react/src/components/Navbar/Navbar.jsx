import { User, Menu, Globe, LogOut, LayoutDashboard, PlusCircle } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';
import NotificationsCenter from './NotificationsCenter';
import { useTranslation } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const { t, lang, switchLang } = useTranslation();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">⚓</span>
            <span className="logo-text">Puerto</span>
          </Link>
        </div>

        <div className="navbar-center">
          <SearchBar onSearch={onSearch} />
        </div>

        <div className="navbar-right">
          {user?.role?.name === 'STORE_OWNER' && (
            <button 
              className="btn btn-primary hide-mobile" 
              style={{ padding: '8px 16px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}
              onClick={() => navigate('/store/services/new')}
            >
              <PlusCircle size={16} />
              Publicar Servicio
            </button>
          )}

          <div className="nav-action-item" onClick={() => switchLang(lang === 'es' ? 'en' : 'es')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Globe size={18} />
            <span style={{ fontSize: '12px', fontWeight: '800' }}>{lang.toUpperCase()}</span>
          </div>
          
          <NotificationsCenter />
          
          {user ? (
            <div className="user-dropdown-container">
              <div className="navbar-profile-trigger">
                <Menu size={16} />
                <div className="profile-avatar">
                  {user.firstName.charAt(0)}
                </div>
              </div>
              <div className="user-dropdown-menu">
                <div className="dropdown-header">
                  <strong>{user.firstName} {user.lastName}</strong>
                  <span>{user.role?.name}</span>
                </div>
                <hr />
                {user.role?.name === 'CUSTOMER' && (
                  <Link to="/dashboard" className="dropdown-item"><LayoutDashboard size={16}/> Dashboard</Link>
                )}
                {user.role?.name === 'STORE_OWNER' && (
                  <Link to="/store/dashboard" className="dropdown-item"><LayoutDashboard size={16}/> Mi Tienda</Link>
                )}
                {user.role?.name === 'ADMIN' && (
                  <Link to="/admin/analytics" className="dropdown-item"><LayoutDashboard size={16}/> Admin</Link>
                )}
                <Link to="/profile" className="dropdown-item"><User size={16}/> Mi Perfil</Link>
                <hr />
                <button onClick={logout} className="dropdown-item logout-btn">
                  <LogOut size={16} /> Cerrar Sesión
                </button>
              </div>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={() => navigate('/login')}>
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}