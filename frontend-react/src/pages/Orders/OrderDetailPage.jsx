import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { Clock, Package, MapPin, CreditCard, ChevronRight, DollarSign, Truck, Star, ClipboardCheck, Database } from 'lucide-react';
import PaymentForm from '../../components/Payments/PaymentForm';
import DocumentManager from '../../components/Orders/DocumentManager';
import TripAssignmentForm from '../../components/Orders/TripAssignmentForm';
import TripTracker from '../../components/Orders/TripTracker';
import ReviewForm from '../../components/Reviews/ReviewForm';
import InspectionForm from '../../components/Inspections/InspectionForm';
import WmsReceiveModal from '../../components/Wms/WmsReceiveModal';
import './OrderDetailPage.css';

export default function OrderDetailPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [events, setEvents] = useState([]);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showTripModal, setShowTripModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInspectionModal, setShowInspectionModal] = useState(false);
  const [showWmsModal, setShowWmsModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const [orderRes, eventsRes, tripsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/orders/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${import.meta.env.VITE_API_URL}/orders/${id}/events`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${import.meta.env.VITE_API_URL}/trips/order/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);
        
        const orderData = await orderRes.json();
        const eventsData = await eventsRes.json();
        const tripsData = await tripsRes.json();
        
        setOrder(orderData);
        setEvents(eventsData);
        setTrips(tripsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <AppLayout><div className="container">Cargando detalles de la orden...</div></AppLayout>;
  if (!order) return <AppLayout><div className="container">Orden no encontrada.</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container order-detail-container" style={{ padding: '40px 0' }}>
        <div className="order-header" style={{ marginBottom: '32px' }}>
          <div className="order-title-group" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <h1 style={{ margin: 0 }}>Orden {order.orderNumber}</h1>
            <span className={`badge badge-${order.state.code.toLowerCase()}`} style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '800' }}>
              {order.state.name}
            </span>
          </div>
          <div className="order-meta" style={{ color: 'var(--color-slate)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Creada el {new Date(order.createdAt).toLocaleDateString()}</span>
            <ChevronRight size={14} />
            <span>{order.service.name}</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '32px' }}>
          <div className="order-main">
            <section className="card" style={{ marginBottom: '32px', padding: '32px' }}>
              <h2 style={{ fontSize: '18px', marginBottom: '24px' }}>Detalles del Servicio</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Package size={20} color="var(--color-rausch-coral)" />
                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--color-slate)', display: 'block' }}>Tienda</label>
                    <span style={{ fontWeight: '700' }}>{order.store.legalName}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <DollarSign size={20} color="var(--color-rausch-coral)" />
                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--color-slate)', display: 'block' }}>Monto Total</label>
                    <span style={{ fontWeight: '700' }}>${order.totalAmount}</span>
                  </div>
                </div>
              </div>
            </section>

            <DocumentManager orderId={id} />

            {trips.length > 0 && (
              <div style={{ marginTop: '32px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Seguimiento de Despacho</h2>
                {trips.map(trip => <TripTracker key={trip.id} trip={trip} />)}
              </div>
            )}

            <section className="card" style={{ marginTop: '32px', padding: '32px' }}>
              <h2 style={{ fontSize: '18px', marginBottom: '24px' }}>Timeline de Eventos</h2>
              <div className="timeline" style={{ position: 'relative', paddingLeft: '24px', borderLeft: '2px solid var(--color-mist)' }}>
                {events.map((event, index) => (
                  <div key={event.id} style={{ position: 'relative', marginBottom: '24px' }}>
                    <div style={{ position: 'absolute', left: '-31px', top: '0', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-rausch-coral)', border: '4px solid white' }}></div>
                    <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '4px' }}>{event.eventType.replace(/_/g, ' ')}</div>
                    <div style={{ fontSize: '13px', color: 'var(--color-slate)', marginBottom: '4px' }}>{event.description}</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-stone)' }}>{new Date(event.createdAt).toLocaleString()} • Por {event.user.firstName}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="order-sidebar">
            <div className="card" style={{ padding: '32px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Acciones Rápidas</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {order.state.code === 'CREATED' && (
                  <button className="btn btn-primary full-width" onClick={() => setShowPaymentModal(true)}>
                    <DollarSign size={16} style={{ marginRight: '8px' }} />
                    Reportar Pago
                  </button>
                )}
                {order.state.code === 'PAID' && (
                  <>
                    <button className="btn btn-primary full-width" onClick={() => setShowWmsModal(true)}>
                      <Database size={16} style={{ marginRight: '8px' }} />
                      Recibir en Almacén
                    </button>
                    <button className="btn btn-primary full-width" onClick={() => setShowTripModal(true)}>
                      <Truck size={16} style={{ marginRight: '8px' }} />
                      Despachar Carga
                    </button>
                    <button className="btn btn-secondary full-width" onClick={() => setShowInspectionModal(true)}>
                      <ClipboardCheck size={16} style={{ marginRight: '8px' }} />
                      Realizar Inspección
                    </button>
                  </>
                )}
                {order.state.code === 'DELIVERED' && (
                  <button className="btn btn-primary full-width" onClick={() => setShowReviewModal(true)}>
                    <Star size={16} style={{ marginRight: '8px' }} />
                    Finalizar y Calificar
                  </button>
                )}
                <button className="btn btn-secondary full-width">Enviar Mensaje</button>
              </div>
            </div>
          </div>
        </div>

        {showPaymentModal && <PaymentForm order={order} onClose={() => { setShowPaymentModal(false); window.location.reload(); }} />}
        {showWmsModal && <WmsReceiveModal order={order} onClose={() => setShowWmsModal(false)} onReceived={() => { setShowWmsModal(false); window.location.reload(); }} />}
        {showTripModal && <TripAssignmentForm order={order} onClose={() => { setShowTripModal(false); window.location.reload(); }} />}
        {showReviewModal && <ReviewForm order={order} onClose={() => { setShowReviewModal(false); window.location.reload(); }} />}
        {showInspectionModal && <InspectionForm orderId={order.id} templateId={1} onClose={() => setShowInspectionModal(false)} />}
      </div>
    </AppLayout>
  );
}
