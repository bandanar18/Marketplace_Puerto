import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Navigation/Sidebar';
import { useAuth } from '../../context/AuthContext';
import './AppLayout.css';

export default function AppLayout({ children, onSearch }) {
  const { user } = useAuth();

  return (
    <div className={`app-layout ${user ? 'has-sidebar' : ''}`}>
      <Navbar onSearch={onSearch} />
      <div className="app-container">
        {user && <Sidebar />}
        <main className="app-main">
          {children}
        </main>
      </div>
      {!user && (
        <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <p className="footer-brand-name">Puerto</p>
              <p className="footer-brand-desc">Marketplace Logístico para Puertos Aduaneros</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Puerto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
}
