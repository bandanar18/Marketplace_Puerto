import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import CatalogSelect from '../../components/Common/CatalogSelect';
import { Settings, Save, Plus, Trash2 } from 'lucide-react';

export default function CommissionConfigPage() {
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newRule, setNewRule] = useState({ serviceTypeId: '', rate: 5 });

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/commissions/rules`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setRules(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/commissions/rules`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          serviceType: { id: newRule.serviceTypeId },
          rate: Number(newRule.rate),
          active: true
        })
      });
      setNewRule({ serviceTypeId: '', rate: 5 });
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Settings size={32} color="var(--color-rausch-coral)" />
          <h1 style={{ margin: 0 }}>Reglas de Comisión</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '20px' }}>Nueva Regla</h3>
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <CatalogSelect 
                catalog="service-types" 
                label="Categoría de Servicio" 
                value={newRule.serviceTypeId}
                onChange={(val) => setNewRule({...newRule, serviceTypeId: val})}
              />
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Porcentaje (%)</label>
                <input 
                  type="number" step="0.01"
                  value={newRule.rate}
                  onChange={(e) => setNewRule({...newRule, rate: e.target.value})}
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-mist)' }}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
                <Plus size={18} /> Crear Regla
              </button>
            </form>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '20px' }}>Reglas Activas</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-fog)' }}>
                  <th style={{ textAlign: 'left', padding: '12px' }}>Categoría / Tienda</th>
                  <th style={{ textAlign: 'center', padding: '12px' }}>Tasa</th>
                  <th style={{ textAlign: 'center', padding: '12px' }}>Estado</th>
                  <th style={{ textAlign: 'right', padding: '12px' }}>Acción</th>
                </tr>
              </thead>
              <tbody>
                {rules.map(rule => (
                  <tr key={rule.id} style={{ borderBottom: '1px solid var(--color-fog)' }}>
                    <td style={{ padding: '12px' }}>
                      {rule.store ? `Tienda: ${rule.store.name}` : rule.serviceType.name}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center', fontWeight: '700' }}>{rule.rate}%</td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>
                      <span style={{ 
                        padding: '4px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: '700',
                        background: rule.active ? '#e6f4ea' : '#fdecea',
                        color: rule.active ? '#1e7e34' : '#c53030'
                      }}>
                        {rule.active ? 'ACTIVA' : 'INACTIVA'}
                      </span>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      <button className="btn-icon btn-icon-danger"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
