import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import CatalogSelect from '../../components/Common/CatalogSelect';
import AppLayout from '../../layouts/AppLayout/AppLayout';

export default function StoreOnboarding() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    legalName: '',
    taxId: '',
    address: '',
    basePortId: '',
    brandColor: '#ff385c'
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/stores/onboarding`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          basePort: { id: formData.basePortId }
        }),
      });

      if (!response.ok) throw new Error('Onboarding failed');
      navigate('/dashboard');
    } catch (err) {
      setError('Error al registrar la tienda');
    }
  };

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0', maxWidth: '600px' }}>
        <h1 style={{ marginBottom: '8px' }}>Configura tu Tienda Logística</h1>
        <p style={{ color: 'var(--color-slate)', marginBottom: '32px' }}>
          Completa los datos legales para comenzar a publicar tus servicios.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="input-group">
            <label style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Razón Social</label>
            <input 
              style={{ width: '100%', padding: '12px', border: '1px solid var(--color-stone)', borderRadius: '12px' }}
              placeholder="Ej: Logística del Caribe C.A."
              value={formData.legalName}
              onChange={(e) => setFormData({...formData, legalName: e.target.value})}
              required
            />
          </div>

          <div className="input-group">
            <label style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>RIF / Identificación Fiscal</label>
            <input 
              style={{ width: '100%', padding: '12px', border: '1px solid var(--color-stone)', borderRadius: '12px' }}
              placeholder="J-12345678-0"
              value={formData.taxId}
              onChange={(e) => setFormData({...formData, taxId: e.target.value})}
              required
            />
          </div>

          <CatalogSelect 
            catalog="ports"
            label="Puerto Base de Operaciones"
            value={formData.basePortId}
            onChange={(val) => setFormData({...formData, basePortId: val})}
          />

          <div className="input-group">
            <label style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Color de Marca</label>
            <input 
              type="color"
              style={{ width: '100%', height: '44px', border: '1px solid var(--color-stone)', borderRadius: '12px', padding: '4px' }}
              value={formData.brandColor}
              onChange={(e) => setFormData({...formData, brandColor: e.target.value})}
            />
          </div>

          {error && <p style={{ color: 'var(--color-rausch-deep)', fontSize: '14px' }}>{error}</p>}

          <button type="submit" className="btn btn-primary" style={{ height: '48px', marginTop: '16px' }}>
            Finalizar Configuración
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
