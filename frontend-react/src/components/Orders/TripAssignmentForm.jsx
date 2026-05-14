import { useState } from 'react';
import { X, Truck, User, Phone, MapPin } from 'lucide-react';

export default function TripAssignmentForm({ order, onClose }) {
  const [formData, setFormData] = useState({
    vehiclePlate: '',
    driverName: '',
    driverPhone: '',
    origin: order.service.port?.name || '',
    destination: '',
    estimatedArrival: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/trips/order/${order.id}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Trip creation failed');
      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      backdropFilter: 'blur(4px)'
    }}>
      <div className="modal-content" style={{
        background: 'white', padding: '40px', borderRadius: '32px',
        width: '100%', maxWidth: '540px', position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        <button onClick={onClose} style={{ 
          position: 'absolute', right: '24px', top: '24px', 
          border: 'none', background: 'var(--color-fog)', 
          borderRadius: '50%', padding: '8px', cursor: 'pointer' 
        }}>
          <X size={20} />
        </button>

        <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: '800' }}>Asignar Despacho</h2>
        <p style={{ color: 'var(--color-slate)', marginBottom: '32px', fontSize: '14px' }}>
          Orden <strong>{order.orderNumber}</strong> • Ingresa los datos del transporte.
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="input-group">
              <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Truck size={14} /> Placa Vehículo
              </label>
              <input 
                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-mist)', borderRadius: '12px' }}
                placeholder="Ej: ABC-123"
                value={formData.vehiclePlate}
                onChange={(e) => setFormData({...formData, vehiclePlate: e.target.value})}
                required
              />
            </div>
            <div className="input-group">
              <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} /> Conductor
              </label>
              <input 
                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-mist)', borderRadius: '12px' }}
                placeholder="Nombre completo"
                value={formData.driverName}
                onChange={(e) => setFormData({...formData, driverName: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} /> Teléfono Conductor
            </label>
            <input 
              style={{ width: '100%', padding: '12px', border: '1px solid var(--color-mist)', borderRadius: '12px' }}
              placeholder="+58 4XX XXXXXXX"
              value={formData.driverPhone}
              onChange={(e) => setFormData({...formData, driverPhone: e.target.value})}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="input-group">
              <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} /> Origen
              </label>
              <input 
                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-mist)', borderRadius: '12px' }}
                value={formData.origin}
                onChange={(e) => setFormData({...formData, origin: e.target.value})}
                required
              />
            </div>
            <div className="input-group">
              <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} /> Destino
              </label>
              <input 
                style={{ width: '100%', padding: '12px', border: '1px solid var(--color-mist)', borderRadius: '12px' }}
                placeholder="Ciudad / Almacén"
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'block' }}>Fecha Estimada de Llegada</label>
            <input 
              type="datetime-local"
              style={{ width: '100%', padding: '12px', border: '1px solid var(--color-mist)', borderRadius: '12px' }}
              value={formData.estimatedArrival}
              onChange={(e) => setFormData({...formData, estimatedArrival: e.target.value})}
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ height: '54px', marginTop: '16px', fontSize: '16px', fontWeight: '700', borderRadius: '16px' }} 
            disabled={loading}
          >
            {loading ? 'Procesando...' : 'Confirmar Despacho'}
          </button>
        </form>
      </div>
    </div>
  );
}
