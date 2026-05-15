import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// Fix for default marker icons in Leaflet + React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom]);
  return null;
}

export default function SearchMap({ services, hoveredServiceId }) {
  // Default center (Venezuela ports area approximately)
  const defaultCenter = [10.5, -68.0]; 
  const zoom = 6;

  // Group services by coordinates to avoid overlapping markers
  const markers = services.reduce((acc, service) => {
    const coords = service.store?.basePort?.coordinates;
    if (!coords) return acc;
    
    if (!acc[coords]) acc[coords] = [];
    acc[coords].push(service);
    return acc;
  }, {});

  return (
    <div style={{ height: '100%', width: '100%', borderRadius: '24px', overflow: 'hidden', position: 'sticky', top: '100px' }}>
      <MapContainer center={defaultCenter} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ChangeView center={defaultCenter} zoom={zoom} />
        
        {Object.keys(markers).map(coordStr => {
          const [lat, lng] = coordStr.split(',').map(Number);
          const servicesAtLoc = markers[coordStr];
          const isHovered = servicesAtLoc.some(s => s.id === hoveredServiceId);

          const hoveredIcon = L.icon({
            iconUrl: markerIcon,
            shadowUrl: markerShadow,
            iconSize: [35, 57], // Larger size
            iconAnchor: [17, 57],
            className: 'marker-hovered'
          });

          return (
            <Marker 
              key={coordStr} 
              position={[lat, lng]}
              icon={isHovered ? hoveredIcon : DefaultIcon}
              zIndexOffset={isHovered ? 1000 : 0}
              eventHandlers={{
                mouseover: (e) => e.target.openPopup(),
              }}
            >
              <Popup>
                <div style={{ minWidth: '150px' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>{servicesAtLoc.length} Servicios en este Puerto</h4>
                  <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {servicesAtLoc.map(s => (
                      <div key={s.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
                        <div style={{ fontWeight: '700', fontSize: '12px' }}>{s.name}</div>
                        <div style={{ color: 'var(--color-rausch-coral)', fontWeight: '800' }}>${s.basePrice}</div>
                        <a href={`/services/${s.id}`} style={{ fontSize: '11px', color: 'var(--color-slate)' }}>Ver detalle</a>
                      </div>
                    ))}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
