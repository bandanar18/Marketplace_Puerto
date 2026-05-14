import { useState } from 'react';
import CatalogSelect from '../Common/CatalogSelect';

export default function FilterSidebar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    portId: '',
    categoryId: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <aside className="filter-sidebar" style={{
      width: '280px',
      paddingRight: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
      <div className="filter-section">
        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Ubicación</h3>
        <CatalogSelect 
          catalog="ports" 
          placeholder="Todos los puertos"
          value={filters.portId}
          onChange={(val) => handleFilter('portId', val)}
        />
      </div>

      <div className="filter-section">
        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Categoría</h3>
        <CatalogSelect 
          catalog="service-types" 
          placeholder="Todas las categorías"
          value={filters.categoryId}
          onChange={(val) => handleFilter('categoryId', val)}
        />
      </div>

      <div className="filter-section">
        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Rango de Precio</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <input 
            type="number" 
            placeholder="Min" 
            style={{ width: '80px', padding: '8px', borderRadius: '8px', border: '1px solid var(--color-stone)' }}
            value={filters.minPrice}
            onChange={(e) => handleFilter('minPrice', e.target.value)}
          />
          <span>-</span>
          <input 
            type="number" 
            placeholder="Max" 
            style={{ width: '80px', padding: '8px', borderRadius: '8px', border: '1px solid var(--color-stone)' }}
            value={filters.maxPrice}
            onChange={(e) => handleFilter('maxPrice', e.target.value)}
          />
        </div>
      </div>

      <button 
        className="btn btn-ghost" 
        style={{ marginTop: '16px', width: 'fit-content' }}
        onClick={() => {
          const reset = { portId: '', categoryId: '', minPrice: '', maxPrice: '' };
          setFilters(reset);
          onFilterChange(reset);
        }}
      >
        Limpiar filtros
      </button>
    </aside>
  );
}
