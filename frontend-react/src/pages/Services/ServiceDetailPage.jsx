import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import QuotationModal from '../../components/Quotations/QuotationModal';
import ReviewForm from '../../components/Reviews/ReviewForm';
import { MapPin, ShieldCheck, Star, User } from 'lucide-react';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchReviews = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews/service/${id}`);
    const data = await response.json();
    setReviews(data);
  };

  useEffect(() => {
    const fetchService = async () => {
      // In a real app, this would be a specific endpoint GET /services/:id
      // For now, we fetch all and filter or use the existing list
      const response = await fetch(`${import.meta.env.VITE_API_URL}/services`);
      const data = await response.json();
      const found = data.find(s => s.id === parseInt(id));
      setService(found);
    };
    fetchService();
    fetchReviews();
  }, [id]);

  if (!service) return <AppLayout><div className="container">Cargando...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div className="service-header">
          <h1>{service.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '12px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={16} fill="currentColor" />
              <span style={{ fontWeight: '600' }}>{service.store.averageRating || '4.9'}</span>
            </div>
            <span style={{ color: 'var(--color-slate)' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={16} />
              <span style={{ textDecoration: 'underline' }}>{service.store.basePort?.name || 'Puerto Base'}</span>
            </div>
          </div>
        </div>

        <div className="service-content" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '64px', marginTop: '32px' }}>
          <div className="service-info">
            <div style={{ borderTop: '1px solid var(--color-mist)', padding: '32px 0' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>Descripción del servicio</h2>
              <p style={{ lineHeight: '1.6', color: 'var(--color-slate)' }}>
                {service.description || 'Proporcionamos servicios logísticos de alta calidad con estándares internacionales. Nuestro equipo está capacitado para manejar cargas complejas y asegurar tiempos de entrega óptimos.'}
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid var(--color-mist)', padding: '32px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <ShieldCheck size={32} color="var(--color-rausch-coral)" />
                <div>
                  <h4 style={{ margin: 0 }}>Garantía Antigravity</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-slate)' }}>Tu carga está protegida y monitoreada en cada paso.</p>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div style={{ borderTop: '1px solid var(--color-mist)', padding: '32px 0' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Star size={20} fill="currentColor" /> {reviews.length} reseñas
                </div>
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                {reviews.map(review => (
                  <div key={review.id} className="review-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={20} />
                      </div>
                      <div>
                        <h4 style={{ margin: 0 }}>{review.author.name}</h4>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-stone)' }}>{new Date(review.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <p style={{ lineHeight: '1.5', fontSize: '15px' }}>{review.comment}</p>
                  </div>
                ))}
              </div>

              {user && (
                <ReviewForm 
                  service={service} 
                  onReviewSubmitted={fetchReviews} 
                />
              )}
            </div>
          </div>

          <div className="service-booking">
            <div style={{ 
              border: '1px solid var(--color-mist)', 
              borderRadius: '24px', 
              padding: '24px', 
              boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 16px',
              position: 'sticky',
              top: '120px'
            }}>
              <div style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>
                ${service.basePrice} <span style={{ fontWeight: '400', fontSize: '16px', color: 'var(--color-slate)' }}>/ {service.billingUnit?.name || 'unidad'}</span>
              </div>
              
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', height: '48px', fontSize: '16px' }}
                onClick={() => user ? setShowModal(true) : navigate('/login')}
              >
                Solicitar Cotización
              </button>
              
              <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '16px', color: 'var(--color-slate)' }}>
                No se te cobrará nada aún
              </p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <QuotationModal 
          service={service} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </AppLayout>
  );
}
