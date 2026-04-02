import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultAreas = [
  { name: 'Centereach', pin: true, lat: 40.864, lng: -73.0857 },
  { name: 'Selden', lat: 40.8676, lng: -73.0432 },
  { name: 'Stony Brook', lat: 40.9148, lng: -73.1448 },
  { name: 'Smithtown', lat: 40.8551, lng: -73.2005 },
  { name: 'Hauppauge', lat: 40.8251, lng: -73.2026 },
  { name: 'Commack', lat: 40.8426, lng: -73.2829 },
  { name: 'Ronkonkoma', lat: 40.8123, lng: -73.1137 },
  { name: 'Lake Grove', lat: 40.8587, lng: -73.1151 },
  { name: 'Coram', lat: 40.8698, lng: -73.0015 },
  { name: 'Port Jefferson', lat: 40.9473, lng: -73.056 },
  { name: 'Setauket', lat: 40.929, lng: -73.112 },
  { name: 'Islip', lat: 40.729, lng: -73.2098 },
  { name: 'Bay Shore', lat: 40.7248, lng: -73.2471 },
  { name: 'Huntington', lat: 40.8726, lng: -73.4257 },
  { name: 'Melville', lat: 40.7937, lng: -73.4121 },
  { name: 'Bohemia', lat: 40.7676, lng: -73.1304 },
  { name: 'Patchogue', lat: 40.7637, lng: -73.0146 },
  { name: 'Medford', lat: 40.8223, lng: -72.9965 },
  { name: 'Holbrook', lat: 40.7926, lng: -73.0779 },
  { name: 'Holtsville', lat: 40.8198, lng: -73.0465 },
];

const primaryIcon = L.divIcon({
  html: '<div class="lc-pin-primary"><div class="lc-pin-ring"></div><div class="lc-pin-core"></div></div>',
  className: '',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const secondaryIcon = L.divIcon({
  html: '<div class="lc-pin-secondary"></div>',
  className: '',
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});

interface Area {
  name: string;
  pin?: boolean;
  lat?: number;
  lng?: number;
}

interface AreasSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  areas?: Area[];
  seoParagraph?: string;
}

export function AreasSection({
  eyebrow = 'Service Areas',
  title = 'Serving Nassau & Suffolk County',
  subtitle = 'Based in Centereach — we travel to every corner of Long Island at no extra charge.',
  areas = defaultAreas,
  seoParagraph,
}: AreasSectionProps) {
  const mappable = areas.filter(
    (a): a is Area & { lat: number; lng: number } =>
      typeof a.lat === 'number' && typeof a.lng === 'number',
  );

  return (
    <section className='py-20 px-[6%] bg-navy2'>
      <div className='max-w-[1160px] mx-auto'>
        {/* Header */}
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-3 mb-3'>
            <span
              className='w-10 h-px'
              style={{
                background: 'linear-gradient(to right, transparent, #00B0FF)',
              }}
            />
            <span className='text-ice text-[0.72rem] font-extrabold tracking-[2.5px] uppercase'>
              {eyebrow}
            </span>
            <span
              className='w-10 h-px'
              style={{
                background: 'linear-gradient(to left, transparent, #00B0FF)',
              }}
            />
          </div>
          <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
            {title}
          </h2>
          <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto'>
            {subtitle}
          </p>
        </div>

        {/* Map */}
        <div
          className='relative rounded-[22px] overflow-hidden border border-gline mb-7'
          style={{
            height: '460px',
            boxShadow:
              '0 0 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(0,176,255,0.07)',
          }}
        >
          <MapContainer
            center={[40.845, -73.2]}
            zoom={10}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            {mappable.map((area) => (
              <Marker
                key={area.name}
                position={[area.lat, area.lng]}
                icon={area.pin ? primaryIcon : secondaryIcon}
              >
                <Tooltip
                  permanent={area.pin}
                  direction='top'
                  offset={[0, area.pin ? -16 : -9]}
                >
                  {area.pin ? `📍 ${area.name} — Home Base` : area.name}
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Area pills */}
        <div className='flex flex-wrap gap-[0.55rem]'>
          {areas.map((area) => (
            <div
              key={area.name}
              className={`px-[0.95rem] py-[0.38rem] rounded-full text-[0.78rem] font-bold border cursor-default transition-colors duration-200 ${
                area.pin
                  ? 'border-transparent text-navy'
                  : 'bg-glass border-gline text-text hover:border-[rgba(0,176,255,0.4)]'
              }`}
              style={area.pin ? { background: '#00B0FF' } : undefined}
            >
              {area.pin ? '📍 ' : ''}
              {area.name}
            </div>
          ))}
        </div>

        {seoParagraph && (
          <p className='text-[0.82rem] text-muted leading-[1.85] mt-5 p-5 bg-[rgba(255,255,255,0.03)] border border-gline rounded-2xl'>
            {seoParagraph}
          </p>
        )}
      </div>
    </section>
  );
}
