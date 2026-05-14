import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { Clock, Package, MapPin, CreditCard, ChevronRight, DollarSign, Truck } from 'lucide-react';
import PaymentForm from '../../components/Payments/PaymentForm';
import DocumentManager from '../../components/Orders/DocumentManager';
import TripAssignmentForm from '../../components/Orders/TripAssignmentForm';
import TripTracker from '../../components/Orders/TripTracker';
import ReviewForm from '../../components/Reviews/ReviewForm';
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

  const handleRefresh = () => {
    setLoading(true);
    // Trigger useEffect refresh
    setOrder(null);
  };

  if (loading) return <AppLayout><div className="container">Cargando detalles de la orden...</div></AppLayout>;
  if (!order) return <AppLayout><div className="container">Orden no encontrada.</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container order-detail-container">
        <div className="order-header">
          <div className="order-title-group">
            <h1>Orden {order.orderNumber}</h1>
            <div className={`status-badge status-${order.state.code.toLowerCase()}`}>
              {order.state.name}
            </div>
          </div>
          <div className="order-meta">
            <span>Creada el {new Date(order.createdAt).toLocaleDateString()}</span>
            <ChevronRight size={16} />
            <span>{order.service.name}</span>
          </div>
        </div>

        <div className="order-grid">
          <div className="order-main">
            <section className="order-section card">
              <h2>Detalles del Servicio</h2>
              <div className="info-grid">
                <div className="info-item">
                  <Package size={20} />
                  <div>
                    <label>Tienda</label>
                    <p>{order.store.legalName}</p>
                  </div>
                </div>
                <div className="info-item">
                  <CreditCard size={20} />
                  <div>
                    <label>Monto Total</label>
                    <p>${order.totalAmount}</p>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin size={20} />
                  <div>
                    <label>Ubicación Base</label>
                    <p>{order.store.basePort?.name || 'No especificado'}</p>
                  </div>
                </div>
              </div>
              <div className="order-description">
                <label>Descripción</label>
                <p>{order.description || 'Sin descripción adicional.'}</p>
              </div>
            </section>

            <DocumentManager orderId={id} />

            {trips.map(trip => (
              <TripTracker key={trip.id} trip={trip} />
            ))}

            <section className="order-section card">
              <h2>Timeline de Eventos</h2>
              <div className="timeline">
                {events.map((event, index) => (
                  <div key={event.id} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <span className="event-type">{event.eventType.replace(/_/g, ' ')}</span>
                        <span className="event-date">{new Date(event.createdAt).toLocaleString()}</span>
                      </div>
                      <p className="event-desc">{event.description}</p>
                      <span className="event-user">Por: {event.user.firstName} {event.user.lastName}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="order-sidebar">
            <div className="card">
              <h3>Acciones Rápidas</h3>
              <p className="sidebar-hint">Estado actual: <strong>{order.state.name}</strong></p>
              <div className="sidebar-actions">
                {order.state.code === 'CREATED' && (
                  <button className="btn btn-primary full-width" onClick={() => setShowPaymentModal(true)}>
                    <DollarSign size={16} style={{ marginRight: '8px' }} />
                    Reportar Pago
                  </button>
                )}
                {order.state.code === 'PAYMENT_REJECTED' && (
                  <button className="btn btn-danger full-width" onClick={() => setShowPaymentModal(true)}>
                    Corregir Pago
                  </button>
                )}
                {order.state.code === 'PAID' && (
                  <button className="btn btn-primary full-width" onClick={() => setShowTripModal(true)}>
                    <Truck size={16} style={{ marginRight: '8px' }} />
                    Despachar Carga
                  </button>
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

        {showPaymentModal && (
          <PaymentForm 
            order={order} 
            onClose={() => {
              setShowPaymentModal(false);
              window.location.reload();
            }} 
          />
        )}
        
        {showTripModal && (
          <TripAssignmentForm 
            order={order} 
            onClose={() => {
              setShowTripModal(false);
              window.location.reload();
            }} 
          />
        )}

        {showReviewModal && (
          <ReviewForm 
            order={order} 
            onClose={() => {
              setShowReviewModal(false);
              window.location.reload();
            }} 
          />
        )}
      </div>
    </AppLayout>
  );
}
