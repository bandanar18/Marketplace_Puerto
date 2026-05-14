import { useState } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import CatalogSelect from '../../components/Common/CatalogSelect';

export default function AdminCatalogsPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ marginBottom: '32px' }}>Gestión de Catálogos</h1>
        
        <div style={{ 
          background: 'white', 
          padding: '24px', 
          borderRadius: '20px', 
          boxShadow: 'var(--shadow-subtle)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          <CatalogSelect 
            catalog="countries" 
            label="Países Soportados" 
            value={selectedCountry}
            onChange={setSelectedCountry}
          />
          
          <CatalogSelect 
            catalog="currencies" 
            label="Monedas de Operación" 
            value={selectedCurrency}
            onChange={setSelectedCurrency}
          />

          <CatalogSelect 
            catalog="units" 
            label="Unidades de Medida" 
          />

          <CatalogSelect 
            catalog="service-types" 
            label="Tipos de Servicio" 
          />
        </div>
      </div>
    </AppLayout>
  );
}
