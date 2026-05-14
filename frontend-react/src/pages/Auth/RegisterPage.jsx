import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(formData);
      navigate('/');
    } catch (err) {
      setError('Error al registrar usuario');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Regístrate</h1>
        <p className="auth-subtitle">Únete a la red logística más grande</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="input-group">
              <input 
                name="firstName"
                placeholder="Nombre" 
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input 
                name="lastName"
                placeholder="Apellido" 
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <input 
              name="email"
              type="email" 
              placeholder="Correo electrónico" 
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <input 
              name="password"
              type="password" 
              placeholder="Contraseña" 
              onChange={handleChange}
              required
            />
          </div>
          
          {error && <p className="auth-error">{error}</p>}
          
          <button type="submit" className="btn btn-primary btn-auth">
            Crear cuenta
          </button>
        </form>

        <div className="auth-divider">
          <span>o</span>
        </div>

        <button className="btn btn-ghost btn-full" onClick={() => navigate('/login')}>
          Ya tengo una cuenta
        </button>
      </div>
    </div>
  );
}
