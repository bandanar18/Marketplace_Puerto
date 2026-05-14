import { Truck, MapPin, CheckCircle, Clock, Phone, User } from 'lucide-react';
import './TripTracker.css';

export default function TripTracker({ trip }) {
  const steps = ['SCHEDULED', 'IN_TRANSIT', 'DELIVERED'];
  const currentIndex = steps.indexOf(trip.status);

  return (
    <div className="trip-tracker card">
      <div className="tracker-header">
        <div className="trip-info">
          <Truck size={24} color="var(--color-rausch-coral)" />
          <div>
            <h4>Viaje {trip.tripNumber}</h4>
            <p>Placa: <strong>{trip.vehiclePlate}</strong></p>
          </div>
        </div>
        <div className={`status-badge ${trip.status.toLowerCase()}`}>
          {trip.status}
        </div>
      </div>

      <div className="tracker-path">
        {steps.map((step, index) => (
          <div key={step} className={`path-step ${index <= currentIndex ? 'active' : ''}`}>
            <div className="step-marker">
              {index < currentIndex ? <CheckCircle size={16} /> : <div className="dot" />}
            </div>
            <div className="step-label">{step.replace('_', ' ')}</div>
            {index < steps.length - 1 && <div className="path-line" />}
          </div>
        ))}
      </div>

      <div className="tracker-details">
        <div className="detail-item">
          <User size={16} />
          <span>{trip.driverName}</span>
        </div>
        <div className="detail-item">
          <Phone size={16} />
          <span>{trip.driverPhone}</span>
        </div>
        <div className="detail-item">
          <MapPin size={16} />
          <span>Destino: {trip.destination}</span>
        </div>
        <div className="detail-item">
          <Clock size={16} />
          <span>Llegada: {new Date(trip.estimatedArrival).toLocaleString()}</span>
        </div>
      </div>
      
      {trip.status !== 'DELIVERED' && (
        <div className="simulation-hint">
          * Seguimiento en tiempo real activado. El conductor está en ruta.
        </div>
      )}
    </div>
  );
}
