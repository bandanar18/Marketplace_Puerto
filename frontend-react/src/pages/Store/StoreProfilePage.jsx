import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import ServiceResultCard from '../../components/ServiceResultCard/ServiceResultCard';
import { Star, ShieldCheck, MapPin, Calendar } from 'lucide-react';

export default function StoreProfilePage() {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch store details (using existing endpoints or simple search)
      const storesRes = await fetch(`${import.meta.env.VITE_API_URL}/stores`);
      const allStores = await storesRes.json();
      const foundStore = allStores.find(s => s.id === parseInt(id));
      setStore(foundStore);

      // Fetch services for this store
      const servicesRes = await fetch(`${import.meta.env.VITE_API_URL}/services`);
      const allServices = await servicesRes.json();
      setServices(allServices.filter(s => s.store.id === parseInt(id)));

      // Fetch reviews for this store
      const reviewsRes = await fetch(`${import.meta.env.VITE_API_URL}/reviews/store/${id}`);
      const reviewsData = await reviewsRes.json();
      setReviews(reviewsData);
    };
    fetchData();
  }, [id]);

  if (!store) return <AppLayout><div className="container">Cargando...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '64px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px' }}>
          
          {/* Left Column: Store Summary Card */}
          <div className="store-sidebar">
            <div style={{ 
              border: '1px solid var(--color-mist)', 
              borderRadius: '24px', 
              padding: '32px', 
              boxShadow: 'var(--shadow-subtle)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '100px', height: '100px', borderRadius: '50%', 
                background: store.brandColor || 'var(--color-rausch-coral)', 
                margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '40px', fontWeight: '800'
              }}>
                {store.legalName.charAt(0)}
              </div>
              <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>{store.legalName}</h1>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: '600', marginBottom: '24px' }}>
                <Star size={16} fill="currentColor" /> {store.averageRating || '4.9'}
              </div>
              
              <div style={{ borderTop: '1px solid #eee', paddingTop: '24px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <ShieldCheck size={20} />
                  <span>Identidad Verificada</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <MapPin size={20} />
                  <span>Basado en {store.basePort?.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Calendar size={20} />
                  <span>Miembro desde {new Date(store.createdAt).getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Services and Reviews */}
          <div className="store-main">
            <h2 style={{ marginBottom: '32px' }}>Servicios de esta tienda</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '64px' }}>
              {services.map(service => (
                <ServiceResultCard key={service.id} service={service} />
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--color-mist)', paddingTop: '48px' }}>
              <h2 style={{ marginBottom: '32px' }}>Lo que dicen los clientes</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {reviews.map(review => (
                  <div key={review.id} style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <div style={{ fontWeight: '600' }}>{review.author.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--color-stone)' }}>{new Date(review.createdAt).toLocaleDateString()}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '2px', marginBottom: '8px' }}>
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-slate)' }}>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
