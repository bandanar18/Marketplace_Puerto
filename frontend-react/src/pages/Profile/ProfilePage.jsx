import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { User, Shield, Bell, Save } from 'lucide-react';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: ''
  });

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setFormData({
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone || '',
          address: data.address || ''
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
        method: 'PATCH',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Perfil actualizado con éxito');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <AppLayout><div className="container">Cargando...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ marginBottom: '32px' }}>Mi Perfil</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ 
              background: 'white', padding: '24px', borderRadius: '24px', 
              boxShadow: 'var(--shadow-subtle)', display: 'flex', alignItems: 'center', gap: '16px' 
            }}>
              <div style={{ 
                width: '64px', height: '64px', background: 'var(--color-fog)', 
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <User size={32} color="var(--color-carbon)" />
              </div>
              <div>
                <h3 style={{ margin: 0 }}>{user.firstName} {user.lastName}</h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-slate)' }}>{user.role.name}</p>
              </div>
            </div>

            <div className="profile-nav" style={{ 
              background: 'white', padding: '12px', borderRadius: '24px', 
              boxShadow: 'var(--shadow-subtle)' 
            }}>
              <button style={navItemStyleActive}><User size={18} /> Información Personal</button>
              <button style={navItemStyle}><Shield size={18} /> Seguridad</button>
              <button style={navItemStyle}><Bell size={18} /> Notificaciones</button>
            </div>
          </div>

          {/* Form */}
          <div style={{ 
            background: 'white', padding: '40px', borderRadius: '32px', 
            boxShadow: 'var(--shadow-subtle)' 
          }}>
            <h2 style={{ marginBottom: '24px' }}>Información Personal</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label style={labelStyle}>Nombre</label>
                  <input 
                    style={inputStyle}
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label style={labelStyle}>Apellido</label>
                  <input 
                    style={inputStyle}
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label style={labelStyle}>Correo Electrónico</label>
                <input style={{...inputStyle, background: '#f5f5f5', cursor: 'not-allowed'}} value={user.email} disabled />
                <p style={{ fontSize: '12px', color: 'var(--color-stone)', marginTop: '4px' }}>El correo no puede ser modificado por seguridad.</p>
              </div>

              <div className="form-group">
                <label style={labelStyle}>Teléfono</label>
                <input 
                  style={inputStyle}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+52 55..."
                />
              </div>

              <div className="form-group">
                <label style={labelStyle}>Dirección</label>
                <textarea 
                  style={{...inputStyle, height: '100px', resize: 'none'}}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Calle, Número, Colonia..."
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: 'fit-content', padding: '12px 32px', display: 'flex', alignItems: 'center', gap: '8px' }}
                disabled={saving}
              >
                <Save size={18} /> {saving ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '700',
  marginBottom: '8px',
  color: 'var(--color-carbon)'
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
  border: '1px solid var(--color-mist)',
  fontSize: '15px'
};

const navItemStyle = {
  width: '100%',
  padding: '12px 16px',
  border: 'none',
  background: 'none',
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  borderRadius: '16px',
  cursor: 'pointer',
  color: 'var(--color-slate)',
  fontWeight: '600'
};

const navItemStyleActive = {
  ...navItemStyle,
  background: 'var(--color-fog)',
  color: 'var(--color-carbon)'
};
