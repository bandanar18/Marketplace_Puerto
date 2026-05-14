import { Star, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ServiceResultCard.css';

export default function ServiceResultCard({ service }) {
  const navigate = useNavigate();

  return (
    <div className="service-card" onClick={() => navigate(`/services/${service.id}`)}>
      <div 
        className="service-card-image" 
        style={{ backgroundImage: `url(${service.imageUrl || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'})` }}
      >
        <div className="service-card-badge">
          <ShieldCheck size={12} />
          <span>Verificado</span>
        </div>
      </div>

      <div className="service-card-info">
        <div className="service-card-header">
          <h3 className="service-card-title">{service.name}</h3>
          <div className="service-card-rating">
            <Star size={12} fill="currentColor" />
            <span>{service.store?.averageRating || '4.9'}</span>
          </div>
        </div>
        
        <p className="service-card-store">{service.store?.legalName || 'Empresa Logística'}</p>
        <p className="service-card-port">{service.store?.basePort?.name || 'Puerto Cabello'}</p>
        
        <div className="service-card-footer">
          <span className="service-card-price">${service.basePrice}</span>
          <span className="service-card-unit">/ {service.billingUnit?.name || 'unidad'}</span>
        </div>
      </div>
    </div>
  );
}
