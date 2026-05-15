import { Box, MapPin, Calendar, Database, Search, Lock, Truck, ChevronDown, ChevronUp } from 'lucide-react';
import WarehouseMapView from '../../components/Wms/WarehouseMapView';

export default function WmsInventoryPage() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [showMap, setShowMap] = useState(false);

  const fetchInventory = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/wms/inventory/my`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setInventory(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleDispatch = async (itemId) => {
    if (!window.confirm('¿Estás seguro de despachar este ítem? Saldrá físicamente del almacén.')) return;
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/wms/dispatch/${itemId}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        fetchInventory();
      } else {
        const error = await res.json();
        alert(error.message || 'Error al despachar');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredItems = inventory.filter(item => 
    item.sku.toLowerCase().includes(filter.toLowerCase()) || 
    item.description.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <AppLayout><div className="container">Cargando inventario...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Database size={32} color="var(--color-rausch-coral)" />
            <h1 style={{ margin: 0 }}>Gestión de Almacén (WMS)</h1>
          </div>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              onClick={() => setShowMap(!showMap)}
              className="btn btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              {showMap ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              {showMap ? 'Ocultar Mapa' : 'Ver Mapa de Racks'}
            </button>
            <div style={{ position: 'relative', width: '300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-slate)' }} />
              <input 
                type="text" 
                placeholder="Buscar por SKU..."
                style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '12px', border: '1px solid var(--color-mist)' }}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>
        </div>

        {showMap && (
          <div style={{ marginBottom: '40px' }} className="fade-in">
            <WarehouseMapView rackId={1} />
          </div>
        )}

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: 'var(--color-fog)' }}>
              <tr>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>SKU / Ítem</th>
                <th style={{ textAlign: 'center', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Cantidad</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Ubicación</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Fecha Recepción</th>
                <th style={{ textAlign: 'center', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid var(--color-mist)', background: item.isBlocked ? '#fff8f8' : 'transparent' }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {item.isBlocked && <Lock size={16} color="#d32f2f" />}
                      <div>
                        <div style={{ fontWeight: '700', color: item.isBlocked ? '#d32f2f' : 'var(--color-carbon)' }}>{item.sku}</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-slate)' }}>{item.description}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'center', fontWeight: '800' }}>
                    {item.quantity} {item.unit}
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                      <MapPin size={14} color="var(--color-rausch-coral)" />
                      Rack {item.position?.rack?.code || 'A1'} - L{item.position?.level} C{item.position?.column}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={14} color="var(--color-slate)" />
                      {new Date(item.receivedAt || item.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                    <button 
                      onClick={() => handleDispatch(item.id)}
                      disabled={item.isBlocked}
                      className="btn btn-sm"
                      style={{ 
                        background: item.isBlocked ? 'var(--color-fog)' : 'var(--color-carbon)',
                        color: '#fff',
                        display: 'flex', alignItems: 'center', gap: '6px', margin: '0 auto'
                      }}
                    >
                      <Truck size={14} />
                      Despachar
                    </button>
                  </td>
                </tr>
              ))}
              {filteredItems.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '60px', color: 'var(--color-slate)' }}>
                    No se encontró mercancía en stock.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
