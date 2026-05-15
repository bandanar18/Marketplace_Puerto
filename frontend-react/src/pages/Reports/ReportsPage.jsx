import AppLayout from '../../layouts/AppLayout/AppLayout';
import ExportButton from '../../components/Common/ExportButton';
import { FileDown, Table, TrendingUp, ShieldCheck, Info } from 'lucide-react';

export default function ReportsPage() {
  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Centro de Reportes</h1>
          <p style={{ color: 'var(--color-slate)' }}>Extrae datos maestros para auditoría y contabilidad en formato CSV.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: 'var(--color-fog)', padding: '12px', borderRadius: '16px' }}>
                <Table size={24} color="var(--color-rausch-coral)" />
              </div>
              <div>
                <h3 style={{ margin: 0 }}>Ventas y Órdenes</h3>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-slate)' }}>Historial completo de transacciones</p>
              </div>
            </div>
            
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-carbon)', marginBottom: '32px' }}>
              Incluye detalles de clientes, servicios contratados, montos totales y estados de entrega. Ideal para conciliación bancaria.
            </p>

            <ExportButton 
              endpoint="/reports/orders/csv" 
              filename="reporte_ventas_puerto.csv" 
              label="Descargar Reporte de Ventas" 
            />
          </div>

          <div className="card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: 'var(--color-fog)', padding: '12px', borderRadius: '16px' }}>
                <TrendingUp size={24} color="var(--color-rausch-coral)" />
              </div>
              <div>
                <h3 style={{ margin: 0 }}>Comisiones de Marketplace</h3>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-slate)' }}>Liquidaciones por tienda</p>
              </div>
            </div>
            
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-carbon)', marginBottom: '32px' }}>
              Desglose de ingresos por comisiones, tasas aplicadas y montos base. Herramienta esencial para administradores financieros.
            </p>

            <ExportButton 
              endpoint="/reports/commissions/csv" 
              filename="reporte_comisiones_puerto.csv" 
              label="Descargar Reporte de Comisiones" 
            />
          </div>

          <div className="card" style={{ padding: '32px', background: 'var(--color-carbon)', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '16px' }}>
                <ShieldCheck size={24} color="white" />
              </div>
              <div>
                <h3 style={{ margin: 0, color: 'white' }}>Bitácora de Auditoría</h3>
                <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Logs de seguridad (Admin)</p>
              </div>
            </div>
            
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
              Registro de eventos críticos, cambios en permisos y accesos al sistema para cumplimiento normativo y seguridad informática.
            </p>

            <button className="btn btn-secondary" style={{ width: '100%', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Solicitar Reporte de Seguridad
            </button>
          </div>
        </div>

        <div style={{ 
          marginTop: '40px', background: '#e3f2fd', padding: '24px', borderRadius: '24px',
          display: 'flex', alignItems: 'flex-start', gap: '16px', border: '1px solid #bbdefb'
        }}>
          <Info color="#1976d2" size={20} />
          <div>
            <h4 style={{ margin: '0 0 8px 0', color: '#0d47a1' }}>Nota sobre la privacidad de datos</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#1565c0', lineHeight: '1.5' }}>
              Toda exportación de datos queda registrada en el sistema de auditoría con la identidad del usuario y la fecha de descarga. Asegúrese de manejar estos archivos de acuerdo con las políticas de tratamiento de datos personales de su organización.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
