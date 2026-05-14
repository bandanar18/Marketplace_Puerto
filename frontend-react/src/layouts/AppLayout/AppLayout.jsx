import Navbar from '../../components/Navbar/Navbar';
import './AppLayout.css';

export default function AppLayout({ children, onSearch }) {
  return (
    <div className="app-layout">
      <Navbar onSearch={onSearch} />
      <main className="app-main">
        {children}
      </main>
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
    </div>
  );
}
