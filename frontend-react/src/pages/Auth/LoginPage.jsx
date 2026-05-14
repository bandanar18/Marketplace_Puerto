import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Inicia sesión</h1>
        <p className="auth-subtitle">Bienvenido de nuevo al Marketplace Logístico</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {error && <p className="auth-error">{error}</p>}
          
          <button type="submit" className="btn btn-primary btn-auth">
            Continuar
          </button>
        </form>

        <div className="auth-divider">
          <span>o</span>
        </div>

        <button className="btn btn-ghost btn-full" onClick={() => navigate('/register')}>
          Crear una cuenta
        </button>
      </div>
    </div>
  );
}
