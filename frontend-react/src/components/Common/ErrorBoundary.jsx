import React from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--color-fog)', padding: '24px'
        }}>
          <div className="card" style={{ maxWidth: '450px', padding: '48px', textAlign: 'center' }}>
            <div style={{ 
              background: '#ffebee', width: '64px', height: '64px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px auto'
            }}>
              <AlertCircle size={32} color="#d32f2f" />
            </div>
            <h2 style={{ marginBottom: '16px', fontWeight: '800' }}>Vaya, algo salió mal</h2>
            <p style={{ color: 'var(--color-slate)', marginBottom: '32px', fontSize: '15px', lineHeight: '1.6' }}>
              Hemos detectado una anomalía en la interfaz. No te preocupes, tus datos están seguros. Por favor, intenta recargar la página.
            </p>
            <button 
              className="btn btn-primary" 
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
              onClick={() => window.location.reload()}
            >
              <RefreshCcw size={18} />
              Recargar Aplicación
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
