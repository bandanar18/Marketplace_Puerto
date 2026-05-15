import { useState, useEffect } from 'react';

export default function WarehouseMapView({ rackId }) {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/wms/rack/${rackId}/positions`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setPositions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (rackId) fetchPositions();
  }, [rackId]);

  // Group positions by level
  const levels = positions.reduce((acc, pos) => {
    acc[pos.level] = acc[pos.level] || [];
    acc[pos.level].push(pos);
    return acc;
  }, {});

  const sortedLevels = Object.keys(levels).sort((a, b) => b - a); // Higher levels top

  if (loading) return <div>Cargando mapa de rack...</div>;

  return (
    <div className="warehouse-map" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px', background: '#f8f9fa', borderRadius: '24px' }}>
      <h4 style={{ margin: '0 0 16px 0' }}>Mapa Visual del Rack</h4>
      {sortedLevels.map(level => (
        <div key={level} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ width: '30px', fontSize: '12px', fontWeight: '800', color: 'var(--color-slate)' }}>L{level}</div>
          <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
            {levels[level].sort((a, b) => a.column - b.column).map(pos => (
              <div 
                key={pos.id} 
                style={{ 
                  flex: 1, height: '40px', borderRadius: '8px', 
                  border: '1px solid var(--color-mist)',
                  background: pos.status === 'EMPTY' ? 'white' : 'var(--color-rausch-coral)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', fontWeight: '700',
                  color: pos.status === 'EMPTY' ? 'var(--color-slate)' : 'white',
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
                title={`Posición L${level} C${pos.column} - ${pos.status}`}
              >
                C{pos.column}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
