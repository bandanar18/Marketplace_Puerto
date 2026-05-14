import { useState } from 'react';
import { Star, X, Send } from 'lucide-react';

export default function ReviewForm({ order, onClose }) {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews/order/${order.id}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rating, comment }),
      });

      if (!response.ok) throw new Error('Failed to submit review');
      onClose();
      window.location.reload();
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
      backdropFilter: 'blur(8px)'
    }}>
      <div className="modal-content" style={{
        background: 'white', padding: '40px', borderRadius: '32px',
        width: '100%', maxWidth: '480px', position: 'relative',
        textAlign: 'center'
      }}>
        <button onClick={onClose} style={{ 
          position: 'absolute', right: '24px', top: '24px', 
          border: 'none', background: 'var(--color-fog)', 
          borderRadius: '50%', padding: '8px', cursor: 'pointer' 
        }}>
          <X size={20} />
        </button>

        <div style={{ 
          width: '64px', height: '64px', background: '#fff8e1', 
          borderRadius: '20px', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', margin: '0 auto 24px' 
        }}>
          <Star size={32} color="#f57f17" fill="#f57f17" />
        </div>

        <h2 style={{ marginBottom: '8px', fontSize: '24px', fontWeight: '800' }}>¿Cómo fue tu experiencia?</h2>
        <p style={{ color: 'var(--color-slate)', marginBottom: '32px', fontSize: '14px' }}>
          Tu calificación ayuda a {order.store.legalName} a mejorar su servicio.
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
    </div>
  );
}
