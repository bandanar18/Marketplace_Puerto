import { useState } from 'react';
import { Star, X, Send } from 'lucide-react';

export default function ReviewForm({ order, service, onClose, onReviewSubmitted }) {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const targetId = order?.id || service?.id;
  const storeName = order?.store?.legalName || service?.store?.legalName || 'el proveedor';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    const endpoint = order 
      ? `${import.meta.env.VITE_API_URL}/reviews/order/${order.id}`
      : `${import.meta.env.VITE_API_URL}/reviews/service/${service.id}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rating, comment }),
      });

      if (!response.ok) throw new Error('Failed to submit review');
      
      if (onClose) onClose();
      if (onReviewSubmitted) onReviewSubmitted();
      
      if (order) window.location.reload();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const isModal = !!onClose;

  const content = (
    <div className={isModal ? "modal-content" : ""} style={{
      background: 'white', 
      padding: isModal ? '40px' : '24px 0', 
      borderRadius: isModal ? '32px' : '0',
      width: '100%', 
      maxWidth: isModal ? '480px' : '100%', 
      position: 'relative',
      textAlign: isModal ? 'center' : 'left'
    }}>
      {isModal && (
        <button onClick={onClose} style={{ 
          position: 'absolute', right: '24px', top: '24px', 
          border: 'none', background: 'var(--color-fog)', 
          borderRadius: '50%', padding: '8px', cursor: 'pointer' 
        }}>
          <X size={20} />
        </button>
      )}

      {isModal && (
        <div style={{ 
          width: '64px', height: '64px', background: '#fff8e1', 
          borderRadius: '20px', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', margin: '0 auto 24px' 
        }}>
          <Star size={32} color="#f57f17" fill="#f57f17" />
        </div>
      )}

      <h2 style={{ marginBottom: '8px', fontSize: isModal ? '24px' : '20px', fontWeight: '800' }}>
        {isModal ? '¿Cómo fue tu experiencia?' : 'Deja una reseña'}
      </h2>
      <p style={{ color: 'var(--color-slate)', marginBottom: '32px', fontSize: '14px' }}>
        Tu calificación ayuda a {storeName} a mejorar su servicio.
      </p>
        
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', transition: 'transform 0.2s' }}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
              >
                <Star 
                  size={40} 
                  fill={(hover || rating) >= star ? "#f57f17" : "none"} 
                  color={(hover || rating) >= star ? "#f57f17" : "var(--color-mist)"}
                  strokeWidth={2.5}
                />
              </button>
            ))}
          </div>

          <textarea
            style={{ 
              width: '100%', height: '120px', padding: '16px', 
              borderRadius: '16px', border: '1px solid var(--color-mist)',
              marginBottom: '24px', resize: 'none', fontSize: '14px'
            }}
            placeholder="Cuéntanos más detalles sobre el servicio..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', height: '54px', fontSize: '16px', fontWeight: '700', borderRadius: '16px' }} 
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar Calificación'}
          </button>
        </form>
      </div>
  );

  if (isModal) {
    return (
      <div className="modal-overlay" style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', zIndex: 1000,
        backdropFilter: 'blur(8px)'
      }}>
        {content}
      </div>
    );
  }

  return content;
}
