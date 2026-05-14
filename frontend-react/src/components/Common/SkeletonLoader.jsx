import './Skeleton.css';

export default function SkeletonLoader({ type = 'card' }) {
  if (type === 'card') {
    return (
      <div className="skeleton-card">
        <div className="skeleton-image pulse"></div>
        <div className="skeleton-info">
          <div className="skeleton-line pulse" style={{ width: '80%' }}></div>
          <div className="skeleton-line pulse" style={{ width: '60%' }}></div>
          <div className="skeleton-line pulse" style={{ width: '40%' }}></div>
        </div>
      </div>
    );
  }

  if (type === 'profile') {
    return (
      <div className="skeleton-profile container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', padding: '64px 0' }}>
          <div className="skeleton-sidebar pulse" style={{ height: '400px', borderRadius: '24px' }}></div>
          <div className="skeleton-main">
            <div className="skeleton-line pulse" style={{ height: '40px', width: '50%', marginBottom: '32px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div className="skeleton-card pulse" style={{ height: '300px' }}></div>
              <div className="skeleton-card pulse" style={{ height: '300px' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
