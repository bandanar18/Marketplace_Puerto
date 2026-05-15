import { useState } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { Settings, Save, AlertTriangle, ToggleLeft as Toggle, Globe, Percent } from 'lucide-react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    commissionRate: 15,
    maintenanceMode: false,
    allowNewStores: true,
    autoApprovePayments: false
  });
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('Configuración guardada exitosamente.');
    }, 1000);
  };

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Settings size={32} color="var(--color-rausch-coral)" />
              <h1 style={{ margin: 0 }}>Configuración del Sistema</h1>
            </div>
            <p style={{ color: 'var(--color-slate)' }}>Ajustes globales del marketplace y parámetros financieros.</p>
          </div>
          <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
            <Save size={18} style={{ marginRight: '8px' }} />
            {saving ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Percent size={20} color="var(--color-rausch-coral)" />
              Parámetros Financieros
            </h3>
            
            <div style={{ marginBottom: '24px' }}>
              <label className="form-label">Comisión del Marketplace (%)</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="number" className="form-control" 
                  value={settings.commissionRate}
                  onChange={e => setSettings({...settings, commissionRate: Number(e.target.value)})}
                />
                <span style={{ position: 'absolute', right: '16px', top: '12px', color: 'var(--color-slate)' }}>%</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-stone)', marginTop: '8px' }}>
                Esta comisión se aplicará a todas las nuevas órdenes generadas.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <label style={{ fontWeight: '700', display: 'block' }}>Auto-aprobación de Pagos</label>
                <p style={{ fontSize: '12px', color: 'var(--color-slate)', margin: 0 }}>Aprobar automáticamente pagos menores a $100.</p>
              </div>
              <input 
                type="checkbox" 
                checked={settings.autoApprovePayments}
                onChange={e => setSettings({...settings, autoApprovePayments: e.target.checked})}
              />
            </div>
          </div>

          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Globe size={20} color="var(--color-rausch-coral)" />
              Estado del Sitio
            </h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <label style={{ fontWeight: '700', display: 'block' }}>Modo Mantenimiento</label>
                <p style={{ fontSize: '12px', color: 'var(--color-slate)', margin: 0 }}>Solo administradores podrán acceder al sitio.</p>
              </div>
              <input 
                type="checkbox" 
                checked={settings.maintenanceMode}
                onChange={e => setSettings({...settings, maintenanceMode: e.target.checked})}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <label style={{ fontWeight: '700', display: 'block' }}>Permitir Nuevas Tiendas</label>
                <p style={{ fontSize: '12px', color: 'var(--color-slate)', margin: 0 }}>Habilita el registro público de nuevos operadores.</p>
              </div>
              <input 
                type="checkbox" 
                checked={settings.allowNewStores}
                onChange={e => setSettings({...settings, allowNewStores: e.target.checked})}
              />
            </div>

            <div style={{ marginTop: '32px', padding: '16px', background: '#fff9e6', borderRadius: '12px', border: '1px solid #ffe680', display: 'flex', gap: '12px' }}>
              <AlertTriangle size={20} color="#997a00" />
              <p style={{ margin: 0, fontSize: '12px', color: '#665200' }}>
                Los cambios en el estado del sitio afectan a todos los usuarios de forma inmediata. Procede con precaución.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
