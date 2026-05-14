import { useState } from 'react';
import { X, Upload, Calendar } from 'lucide-react';
import CatalogSelect from '../Common/CatalogSelect';

export default function PaymentForm({ order, onClose }) {
  const [formData, setFormData] = useState({
    amount: order.totalAmount || '',
    currencyId: '',
    method: 'Transferencia',
    referenceNumber: '',
    paymentDate: new Date().toISOString().split('T')[0],
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/payments/order/${order.id}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          amount: parseFloat(formData.amount),
          currency: { id: formData.currencyId },
          receiptUrl: fileName ? `https://storage.tos.com/receipts/${fileName}` : '' // Mock URL
        }),
      });

      if (!response.ok) throw new Error('Payment report failed');
      setSuccess(true);
      setTimeout(onClose, 2000);
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

        {success ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ 
              width: '64px', height: '64px', background: '#e6f4ea', 
              color: '#1e7e34', borderRadius: '50%', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' 
            }}>
              <Upload size={32} />
            </div>
            <h2 style={{ color: 'var(--color-carbon)', marginBottom: '8px' }}>¡Pago Reportado!</h2>
            <p style={{ color: 'var(--color-slate)' }}>Un operador validará tu comprobante en breve.</p>
          </div>
        ) : (
          <>
            <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: '800' }}>Reportar Pago</h2>
            <p style={{ color: 'var(--color-slate)', marginBottom: '32px', fontSize: '14px' }}>
              Orden <strong>{order.orderNumber}</strong> • Total: <strong>${order.totalAmount}</strong>
            </p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '16px' }}>
                <div className="input-group">
                  <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'block', color: 'var(--color-carbon)' }}>Monto Pagado</label>
                  <input 
                    type="number" step="0.01"
                    style={{ width: '100%', padding: '14px', border: '1px solid var(--color-mist)', borderRadius: '14px', fontSize: '16px', fontWeight: '600' }}
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    required
                  />
                </div>
                <CatalogSelect 
                  catalog="currencies" 
                  label="Moneda" 
                  value={formData.currencyId}
                  onChange={(val) => setFormData({...formData, currencyId: val})}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="input-group">
                  <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'block', color: 'var(--color-carbon)' }}>Método de Pago</label>
                  <select 
                    style={{ width: '100%', padding: '14px', border: '1px solid var(--color-mist)', borderRadius: '14px', fontSize: '15px' }}
                    value={formData.method}
                    onChange={(e) => setFormData({...formData, method: e.target.value})}
                  >
                    <option value="Transferencia">Transferencia Bancaria</option>
                    <option value="Zelle">Zelle</option>
                    <option value="Pago Movil">Pago Móvil</option>
                  </select>
                </div>
                <div className="input-group">
                  <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'block', color: 'var(--color-carbon)' }}>Fecha de Pago</label>
                  <input 
                    type="date"
                    style={{ width: '100%', padding: '14px', border: '1px solid var(--color-mist)', borderRadius: '14px', fontSize: '15px' }}
                    value={formData.paymentDate}
                    onChange={(e) => setFormData({...formData, paymentDate: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'block', color: 'var(--color-carbon)' }}>Número de Referencia</label>
                <input 
                  style={{ width: '100%', padding: '14px', border: '1px solid var(--color-mist)', borderRadius: '14px', fontSize: '15px' }}
                  placeholder="Ej: 123456789"
                  value={formData.referenceNumber}
                  onChange={(e) => setFormData({...formData, referenceNumber: e.target.value})}
                  required
                />
              </div>

              <div className="input-group">
                <label style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', display: 'block', color: 'var(--color-carbon)' }}>Comprobante (Archivo)</label>
                <div 
                  onClick={() => document.getElementById('file-upload').click()}
                  style={{ 
                    border: '2px dashed var(--color-mist)', padding: '20px', borderRadius: '14px', 
                    textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s ease',
                    background: fileName ? '#f0f9ff' : 'transparent',
                    borderColor: fileName ? '#1976d2' : 'var(--color-mist)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#1976d2'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = fileName ? '#1976d2' : 'var(--color-mist)'}
                >
                  <input 
                    id="file-upload" type="file" style={{ display: 'none' }} 
                    onChange={(e) => setFileName(e.target.files[0]?.name)}
                  />
                  {fileName ? (
                    <span style={{ fontSize: '14px', color: '#1976d2', fontWeight: '600' }}>{fileName}</span>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <Upload size={20} color="var(--color-slate)" />
                      <span style={{ fontSize: '13px', color: 'var(--color-slate)' }}>Haz clic para subir comprobante</span>
                    </div>
                  )}
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ height: '54px', marginTop: '8px', fontSize: '16px', fontWeight: '700', borderRadius: '16px' }} 
                disabled={loading}
              >
                {loading ? 'Procesando...' : 'Confirmar y Reportar Pago'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
