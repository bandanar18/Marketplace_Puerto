import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CatalogSelect from '../../components/Common/CatalogSelect';
import AppLayout from '../../layouts/AppLayout/AppLayout';

export default function ServiceWizard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    basePrice: '',
    billingUnitId: '',
    categoryId: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/services`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          basePrice: parseFloat(formData.basePrice),
          billingUnit: { id: formData.billingUnitId },
          category: { id: formData.categoryId },
          status: 'active'
        }),
      });

      if (!response.ok) throw new Error('Failed to create service');
      navigate('/');
    } catch (err) {
      setError('Error al publicar el servicio');
    }
  };

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0', maxWidth: '600px' }}>
        <h1 style={{ marginBottom: '8px' }}>Publica un nuevo servicio</h1>
        <p style={{ color: 'var(--color-slate)', marginBottom: '32px' }}>
          Define los detalles y el precio de tu oferta logística.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="input-group">
            <label style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Nombre del Servicio</label>
            <input 
              style={{ width: '100%', padding: '12px', border: '1px solid var(--color-stone)', borderRadius: '12px' }}
              placeholder="Ej: Almacenamiento refrigerado"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <CatalogSelect 
            catalog="service-types"
            label="Categoría"
            value={formData.categoryId}
            onChange={(val) => setFormData({...formData, categoryId: val})}
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="input-group">
              <label style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Precio Base (USD)</label>
              <input 
                type="number"
                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-stone)', borderRadius: '12px' }}
                placeholder="0.00"
                value={formData.basePrice}
                onChange={(e) => setFormData({...formData, basePrice: e.target.value})}
                required
              />
            </div>
            <CatalogSelect 
              catalog="units"
              label="Unidad de Cobro"
              value={formData.billingUnitId}
              onChange={(val) => setFormData({...formData, billingUnitId: val})}
            />
          </div>

          <div className="input-group">
            <label style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Descripción</label>
            <textarea 
              style={{ width: '100%', padding: '12px', border: '1px solid var(--color-stone)', borderRadius: '12px', minHeight: '100px' }}
              placeholder="Describe qué incluye el servicio..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          {error && <p style={{ color: 'var(--color-rausch-deep)', fontSize: '14px' }}>{error}</p>}

          <button type="submit" className="btn btn-primary" style={{ height: '48px', marginTop: '16px' }}>
            Publicar Servicio
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
