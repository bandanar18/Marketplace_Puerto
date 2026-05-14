import { User, Menu, Globe, Bell } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';
import './Navbar.css';

export default function Navbar({ onSearch }) {
  const navigate = useNavigate();

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
            <span>Explorar</span>
          </div>
          <div className="nav-action-item">
            <Globe size={18} />
          </div>
          
          <div className="navbar-profile-trigger">
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