import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import PaymentForm from '../../components/Payments/PaymentForm';
import QuotationActions from '../../components/Quotations/QuotationActions';
import ReviewForm from '../../components/Reviews/ReviewForm';

export default function CustomerDashboard() {
  const [requests, setRequests] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [orderToReview, setOrderToReview] = useState(null);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    try {
      const [reqRes, orderRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/quotations/my-requests`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${import.meta.env.VITE_API_URL}/orders/my-orders`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);
      const reqData = await reqRes.json();
      const orderData = await orderRes.json();
      setRequests(reqData);
      setOrders(orderData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleQuotationAction = async (quotationId, action, payload = {}) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/quotations/${quotationId}/${action}`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        fetchData(); // Refresh list
      }
    } catch (error) {
      console.error('Error performing action:', error);
    }
  };

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        {orders.length > 0 && (
          <div style={{ marginBottom: '48px' }}>
            <h1 style={{ marginBottom: '24px' }}>Mis Órdenes Activas</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
              {orders.map(order => (
                <div key={order.id} className="order-card" style={{
                  background: 'white', padding: '20px', borderRadius: '24px', border: '1px solid var(--color-mist)',
                  display: 'flex', flexDirection: 'column', gap: '12px', cursor: 'pointer'
                }} onClick={() => window.location.href = `/orders/${order.id}`}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '800', fontSize: '14px' }}>{order.orderNumber}</span>
                    <span style={{ 
                      fontSize: '11px', fontWeight: '800', padding: '4px 8px', borderRadius: '8px', 
                      background: 'var(--color-fog)', color: 'var(--color-carbon)' 
                    }}>{order.state.name}</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: '16px' }}>{order.service.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--color-slate)' }}>{order.store.legalName}</span>
                    <span style={{ fontWeight: '700' }}>${order.totalAmount}</span>
                  </div>
                  {order.state.code === 'DELIVERED' && (
                    <button 
                      className="btn btn-primary" 
                      style={{ marginTop: '8px', fontSize: '12px', padding: '8px 16px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOrderToReview(order);
                      }}
                    >
                      Calificar Servicio
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <h1 style={{ marginBottom: '32px' }}>Mis Solicitudes</h1>
        
        {loading ? (
          <p>Cargando solicitudes...</p>
        ) : requests.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 0', border: '1px dashed var(--color-mist)', borderRadius: '24px' }}>
            <p>Aún no has realizado ninguna solicitud.</p>
            <button className="btn btn-primary" onClick={() => window.location.href = '/'}>Explorar servicios</button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {requests.map(req => (
              <div key={req.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ 
                  background: 'white', 
                  padding: '24px', 
                  borderRadius: '20px', 
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0' }}>{req.service.name}</h3>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-slate)' }}>Proveedor: {req.store.legalName}</p>
                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-stone)' }}>Solicitado el: {new Date(req.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <div style={{ 
                      padding: '6px 12px', 
                      borderRadius: '12px', 
                      fontSize: '12px', 
                      fontWeight: '700',
                      backgroundColor: req.status === 'PENDING' ? '#fff8e6' : 
                                       req.status === 'QUOTED' ? '#e3f2fd' : 
                                       req.status === 'ACCEPTED' ? '#e6f4ea' : '#f5f5f5',
                      color: req.status === 'PENDING' ? '#b7791f' : 
                             req.status === 'QUOTED' ? '#1976d2' : 
                             req.status === 'ACCEPTED' ? '#1e7e34' : '#616161',
                      marginBottom: '8px'
                    }}>
                      {req.status}
                    </div>
                    {req.quotedPrice && (
                      <div style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>${req.quotedPrice}</div>
                    )}
                    {req.status === 'ACCEPTED' && (
                      <button 
                        className="btn btn-primary" 
                        style={{ fontSize: '12px', padding: '8px 16px' }}
                        onClick={() => setSelectedQuotation(req)}
                      >
                        Reportar Pago
                      </button>
                    )}
                  </div>
                </div>
                {req.status === 'QUOTED' && (
                  <QuotationActions 
                    quotation={req} 
                    onAction={(action, payload) => handleQuotationAction(req.id, action, payload)} 
                  />
                )}
              </div>
            ))}
        </div>
      )}

      {selectedQuotation && (
        <PaymentForm
          order={selectedQuotation}
          onClose={() => {
            setSelectedQuotation(null);
            window.location.reload(); // Quick refresh to see updated status
          }} 
        />
      )}

      {orderToReview && (
        <ReviewForm
          order={orderToReview}
          onClose={() => setOrderToReview(null)}
        />
      )}
      </div>
    </AppLayout>
  )
}
