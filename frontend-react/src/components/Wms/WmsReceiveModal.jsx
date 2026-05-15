import { useState, useEffect } from 'react';
import { Package, Database, X } from 'lucide-react';

export default function WmsReceiveModal({ order, onClose, onReceived }) {
  const [positions, setPositions] = useState([]);
  const [formData, setFormData] = useState({
    sku: '',
    description: '',
    quantity: 1,
    unit: 'PALLETS',
    positionId: '',
    orderId: order.id
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/wms/rack/1/positions`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setPositions(data.filter(p => p.status === 'EMPTY'));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPositions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/wms/receive`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        onReceived();
      } else {
        const err = await res.json();
        alert(err.message || 'Error al recibir');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content card" style={{ maxWidth: '600px', padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Database size={24} color="var(--color-rausch-coral)" />
            <h2 style={{ margin: 0 }}>Recibir Mercancía (WMS)</h2>
          </div>
          <button onClick={onClose} className="btn-icon"><X size={20} /></button>
        </div>

        <p style={{ color: 'var(--color-slate)', marginBottom: '32px' }}>
          Ingresa los detalles de los ítems recibidos para la orden <strong>{order.orderNumber}</strong>.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label className="form-label">SKU / Código</label>
              <input 
                type="text" className="form-control" required
                placeholder="Ej. PAL-882"
                onChange={e => setFormData({...formData, sku: e.target.value})}
              />
            </div>
            <div>
              <label className="form-label">Cantidad</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="number" className="form-control" style={{ width: '80px' }} required min="1"
                  onChange={e => setFormData({...formData, quantity: Number(e.target.value)})}
                />
                <select className="form-control" onChange={e => setFormData({...formData, unit: e.target.value})}>
                  <option value="PALLETS">Pallets</option>
                  <option value="UNITS">Unidades</option>
                  <option value="KG">Kilogramos</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label className="form-label">Descripción</label>
            <input 
              type="text" className="form-control" required
              placeholder="Ej. Cajas de repuestos industriales"
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label className="form-label">Asignar Ubicación en Rack</label>
            <select 
              className="form-control" required
              onChange={e => setFormData({...formData, positionId: Number(e.target.value)})}
            >
              <option value="">Selecciona una posición vacía...</option>
              {positions.map(p => (
                <option key={p.id} value={p.id}>
                  Rack {p.rack.code} - Nivel {p.level} Columna {p.column}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Registrar Entrada</button>
          </div>
        </form>
      </div>
    </div>
  );
}
