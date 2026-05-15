import { useState, useEffect } from 'react';

export default function CatalogSelect({ catalog, label, value, onChange, placeholder = 'Seleccionar...' }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/catalogs/${catalog}`);
        if (!response.ok) throw new Error('Error fetching catalog');
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error(`Error loading catalog ${catalog}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [catalog]);

  return (
    <div className="catalog-select-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && <label style={{ fontSize: '14px', fontWeight: '600' }}>{label}</label>}
      <select 
        value={value} 
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: '12px',
          border: '1px solid var(--color-stone)',
          fontSize: '16px',
          backgroundColor: 'white',
          appearance: 'none',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        <option value="">{loading ? 'Cargando...' : placeholder}</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name || opt.code}
          </option>
        ))}
      </select>
    </div>
  );
}
