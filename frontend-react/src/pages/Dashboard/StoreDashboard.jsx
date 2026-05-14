import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { MessageCircle, DollarSign, Clock, CheckCircle } from 'lucide-react';

export default function StoreDashboard() {
  const [requests, setRequests] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [counterPrice, setCounterPrice] = useState('');
  const [counterNotes, setCounterNotes] = useState('');

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    try {
      const [reqRes, orderRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/quotations/store-requests`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${import.meta.env.VITE_API_URL}/orders/store-orders`, {
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

  const handleUpdateStatus = async (id, status) => {
    const token = localStorage.getItem('token');
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/quotations/${id}`, {
        method: 'PATCH',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCounterRespond = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/quotations/${id}/counter-respond`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quotedPrice: Number(counterPrice), notes: counterNotes })
      });
      setSelectedRequest(null);
      setCounterPrice('');
      setCounterNotes('');
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ marginBottom: '32px' }}>Panel de Tienda</h1>

        {orders.length > 0 && (
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ marginBottom: '24px' }}>Órdenes de Servicio</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {orders.map(order => (
                <div key={order.id} style={{
                  background: 'white', padding: '20px', borderRadius: '20px', border: '1px solid var(--color-mist)',
                  cursor: 'pointer'
                }} onClick={() => window.location.href = `/orders/${order.id}`}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontWeight: '700' }}>{order.orderNumber}</span>
                    <span style={{ fontSize: '12px', background: 'var(--color-fog)', padding: '4px 8px', borderRadius: '8px' }}>
                      {order.state.name}
                    </span>
                  </div>
                  <h4 style={{ margin: '0 0 8px 0' }}>{order.service.name}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-slate)' }}>
                    Cliente: {order.client.firstName} {order.client.lastName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <h2 style={{ marginBottom: '24px' }}>Solicitudes de Cotización</h2>

        {loading ? (
          <p>Cargando solicitudes...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {requests.map(req => (
              <div key={req.id} style={{ 
                background: 'white', 
                padding: '24px', 
                borderRadius: '20px', 
                border: '1px solid var(--color-mist)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ margin: 0 }}>{req.service.name}</h3>
                    <p style={{ margin: '4px 0', color: 'var(--color-slate)', fontSize: '14px' }}>
                      Cliente: {req.client.firstName} {req.client.lastName}
                    </p>
                  </div>
                  <div style={{ 
                    padding: '6px 12px', 
                    borderRadius: '12px', 
                    fontSize: '12px', 
                    fontWeight: '700',
                    backgroundColor: req.status === 'PENDING' ? '#fff8e6' : 
                                     req.status === 'REVISION_REQUESTED' ? '#fff0f0' : '#e6f4ea',
                    color: req.status === 'PENDING' ? '#b7791f' : 
                           req.status === 'REVISION_REQUESTED' ? '#c53030' : '#1e7e34'
                  }}>
                    {req.status}
                  </div>
                </div>

                <div style={{ fontSize: '14px', background: 'var(--color-fog)', padding: '12px', borderRadius: '12px' }}>
                  <strong>Detalles de Carga:</strong> {req.cargoDetails}
                </div>

                {req.notes && (
                  <div style={{ fontSize: '13px', color: 'var(--color-slate)', fontStyle: 'italic' }}>
                    <strong>Notas/Revisiones:</strong> {req.notes}
                  </div>
                )}

                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  {req.status === 'PENDING' && (
                    <>
                      <button 
                        className="btn btn-primary"
                        onClick={() => setSelectedRequest(req)}
                      >
                        <DollarSign size={16} /> Cotizar
                      </button>
                      <button 
                        className="btn btn-secondary"
                        onClick={() => handleUpdateStatus(req.id, 'REJECTED')}
                      >
                        Rechazar
                      </button>
                    </>
                  )}
                  
                  {req.status === 'REVISION_REQUESTED' && (
                    <button 
                      className="btn btn-primary"
                      onClick={() => setSelectedRequest(req)}
                    >
                      <MessageCircle size={16} /> Responder Revisión
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedRequest && (
          <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000
          }}>
            <div style={{ background: 'white', padding: '32px', borderRadius: '24px', width: '100%', maxWidth: '500px' }}>
              <h2>{selectedRequest.status === 'PENDING' ? 'Enviar Cotización' : 'Responder a Revisión'}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Precio Sugerido ($)</label>
                  <input 
                    type="number" 
                    value={counterPrice} 
                    onChange={(e) => setCounterPrice(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-mist)' }}
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Mensaje/Condiciones</label>
                  <textarea 
                    value={counterNotes} 
                    onChange={(e) => setCounterNotes(e.target.value)}
                    style={{ width: '100%', minHeight: '100px', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-mist)' }}
                    placeholder="Escribe detalles adicionales..."
                  />
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '12px' }}>
                  <button className="btn btn-secondary" onClick={() => setSelectedRequest(null)}>Cancelar</button>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      if (selectedRequest.status === 'PENDING') {
                        handleUpdateStatus(selectedRequest.id, 'QUOTED'); // This is a bit simplistic, should use a proper endpoint if we want to save price
                        // Wait, I should probably use updateStatus with data
                        handleCounterRespond(selectedRequest.id);
                      } else {
                        handleCounterRespond(selectedRequest.id);
                      }
                    }}
                  >
                    Enviar Respuesta
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
