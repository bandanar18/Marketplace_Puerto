import { User, Menu, Globe } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';
import NotificationsCenter from './NotificationsCenter';
import { useTranslation } from '../../context/LanguageContext';
import './Navbar.css';

export default function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const { t, lang, switchLang } = useTranslation();

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
          <div className="nav-action-item hide-mobile">
            <span>{t('explore')}</span>
          </div>
          
          <div className="nav-action-item" onClick={() => switchLang(lang === 'es' ? 'en' : 'es')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Globe size={18} />
            <span style={{ fontSize: '12px', fontWeight: '800' }}>{lang.toUpperCase()}</span>
          </div>
          
          <NotificationsCenter />
          
          <div className="navbar-profile-trigger" onClick={() => navigate('/profile')}>
            <Menu size={16} />
            <div className="profile-avatar">
              <User size={18} fill="var(--color-slate)" color="var(--color-slate)" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}