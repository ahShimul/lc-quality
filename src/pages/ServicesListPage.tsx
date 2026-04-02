import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../components/sections/Breadcrumb';
import { CtaBand } from '../components/sections/CtaBand';
import { useFadeIn } from '../hooks/useFadeIn';

const allServices = [
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    icon: 'utensils',
    color: 'from-[#B45000] to-[#DC7800]',
    img: '/images/kitchen.jpg',
    desc: 'Complete kitchen remodels — cabinets, countertops, backsplash, and lighting.',
    tag: 'Interior',
  },
  {
    slug: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    icon: 'shower',
    color: 'from-[#00698C] to-[#4DB6AC]',
    img: '/images/bathroom.jpg',
    desc: 'Walk-in showers, tile, vanities, fixtures, and full bathroom remodels.',
    tag: 'Interior',
  },
  // {
  //   slug: 'electrical-work',
  //   title: 'Licensed Electrical Work',
  //   icon: 'bolt',
  //   color: 'from-[#786000] to-[#C89600]',
  //   img: '/images/electrical.jpg',
  //   desc: 'Panel upgrades, recessed lighting, outlets, circuits, and EV chargers.',
  //   tag: 'Electrical',
  // },
  {
    slug: 'basement-sump-pump-installation',
    title: 'Basement Sump Pump Installation',
    icon: 'bolt',
    color: 'from-[#786000] to-[#C89600]',
    img: '/images/basement-sump-pump-installation.png',
    desc: 'Protect your basement from flooding with our expert sump pump installation services.',
    tag: 'Electrical',
  },
  {
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    icon: 'couch',
    color: 'from-[#4A148C] to-[#7B1FA2]',
    img: '/images/basement.jpg',
    desc: 'Turn basements into living rooms, offices, gyms, or in-law suites.',
    tag: 'Interior',
  },
  {
    slug: 'flooring',
    title: 'Flooring Installation',
    icon: 'th-large',
    color: 'from-[#5D4037] to-[#A1887F]',
    img: '/images/flooring.jpg',
    desc: 'Hardwood, LVP, tile, and laminate floors with precision installation.',
    tag: 'Interior',
  },
  {
    slug: 'roofing',
    title: 'Exterior Repairs',
    icon: 'home',
    color: 'from-[#1A237E] to-[#3949AB]',
    img: '/images/roofing.jpg',
    desc: 'Roof replacement, leak repair, gutters, and fascia work.',
    tag: 'Exterior',
  },
  {
    slug: 'deck-outdoor',
    title: 'Deck Building & Outdoor',
    icon: 'tree',
    color: 'from-[#2E7D32] to-[#66BB6A]',
    img: '/images/deck.jpg',
    desc: 'Custom wood and composite decks, pergolas, and railings.',
    tag: 'Exterior',
  },
  {
    slug: 'painting',
    title: 'Interior & Exterior Painting',
    icon: 'paint-roller',
    color: 'from-[#B71C1C] to-[#E53935]',
    img: '/images/painting.jpg',
    desc: 'Professional painting with proper prep and premium products.',
    tag: 'Interior • Exterior',
  },
  {
    slug: 'doors-windows',
    title: 'Doors & Windows',
    icon: 'door-open',
    color: 'from-[#01579B] to-[#0288D1]',
    img: '/images/living-room.jpg',
    desc: 'Energy-efficient replacements for comfort, curb appeal, and lower bills.',
    tag: 'Exterior',
  },
];

export function ServicesListPage() {
  const fadeRef = useFadeIn();

  return (
    <div ref={fadeRef}>
      <Helmet>
        <title>Home Improvement Services | LC Quality Improvements</title>
        <meta
          name='description'
          content='Full-service home improvement contractor in Centereach, NY. Kitchens, bathrooms, decks, roofing, flooring, electrical, and more.'
        />
      </Helmet>

      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />

      {/* HERO */}
      <section
        className='relative py-24 px-[6%] text-center overflow-hidden'
        style={{
          background:
            'linear-gradient(160deg, #060F1E 0%, #0C2040 55%, #091830 100%)',
        }}
      >
        <div
          className='absolute inset-0 z-0 bg-cover bg-center opacity-[0.07]'
          style={{ backgroundImage: "url('/images/kitchen.jpg')" }}
        />
        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse, rgba(21,101,192,0.14) 0%, transparent 70%)',
          }}
        />
        <div className='relative z-10 max-w-[720px] mx-auto'>
          <div className='inline-flex items-center gap-3 mb-4 fi'>
            <span
              className='w-8 h-px'
              style={{
                background: 'linear-gradient(to right, transparent, #00B0FF)',
              }}
            />
            <span className='text-ice text-[0.72rem] font-extrabold tracking-[2.5px] uppercase'>
              What We Do
            </span>
            <span
              className='w-8 h-px'
              style={{
                background: 'linear-gradient(to left, transparent, #00B0FF)',
              }}
            />
          </div>
          <h1 className='text-[clamp(2rem,4.6vw,3.3rem)] font-black leading-[1.08] tracking-[-1.5px] text-white mb-4 fi'>
            Home Improvement Services
            <br />
            <span className='text-ice'>Across Long Island</span>
          </h1>
          <p className='text-muted text-[1rem] leading-[1.78] max-w-[600px] mx-auto fi'>
            Full-service interior remodeling, exterior upgrades, and licensed
            electrical — all handled by our local Centereach, NY team.
          </p>
          <div className='flex justify-center gap-4 flex-wrap mt-8 fi'>
            <Link to='/contact' className='btn-grad'>
              <i className='fas fa-clipboard-check' /> Get a Free Estimate
            </Link>
            <a href='tel:6311112222' className='btn-ghost'>
              <i className='fas fa-phone' /> 631-111-2222
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className='relative py-20 px-[6%] bg-navy overflow-hidden'>
        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full pointer-events-none opacity-30'
          style={{
            background:
              'radial-gradient(ellipse, rgba(21,101,192,0.12) 0%, transparent 70%)',
          }}
        />
        <div className='max-w-[1200px] mx-auto relative z-10'>
          <div className='grid grid-cols-3 gap-5 mb-8 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1'>
            {allServices.map((svc, i) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className='group relative overflow-hidden rounded-[22px] cursor-pointer fi'
                style={{ height: '300px', transitionDelay: `${i * 45}ms` }}
              >
                <img
                  src={svc.img}
                  alt={svc.title}
                  className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]'
                />
                <div
                  className='absolute inset-0'
                  style={{
                    background:
                      'linear-gradient(to top, rgba(4,9,20,0.97) 0%, rgba(4,9,20,0.3) 55%, rgba(4,9,20,0.08) 100%)',
                  }}
                />
                <div
                  className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,176,255,0.12) 0%, transparent 55%)',
                  }}
                />
                <div
                  className='absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                  style={{ boxShadow: 'inset 0 0 0 1.5px rgba(0,176,255,0.5)' }}
                />

                {/* Icon badge */}
                <div
                  className={`absolute top-4 left-4 w-9 h-9 rounded-[11px] flex items-center justify-center text-white text-sm shadow-lg transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br ${svc.color}`}
                >
                  <i className={`fas fa-${svc.icon}`} />
                </div>
                {/* Tag pill */}
                <div
                  className='absolute top-4 right-4 text-[0.6rem] font-extrabold uppercase tracking-wider px-2 py-[0.2rem] rounded-full backdrop-blur-md'
                  style={{
                    background: 'rgba(4,9,20,0.8)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'rgba(200,225,255,0.88)',
                  }}
                >
                  {svc.tag}
                </div>

                <div className='absolute bottom-0 left-0 right-0 p-5'>
                  <h3 className='text-[1rem] font-black text-white leading-snug mb-1 transition-colors duration-200 group-hover:text-ice'>
                    {svc.title}
                  </h3>
                  <p
                    className='text-[0.76rem] leading-relaxed mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300'
                    style={{
                      color: 'rgba(185,210,238,0.72)',
                      transitionDelay: '40ms',
                    }}
                  >
                    {svc.desc}
                  </p>
                  <div
                    className='flex items-center gap-[0.4rem] text-[0.72rem] font-bold text-ice opacity-0 group-hover:opacity-100 transition-all duration-300'
                    style={{ transitionDelay: '80ms' }}
                  >
                    View Service{' '}
                    <i className='fas fa-arrow-right text-[0.58rem]' />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom strip */}
          <div
            className='relative overflow-hidden p-6 rounded-[22px] border border-gline flex items-center justify-between gap-6 flex-wrap max-[700px]:flex-col fi'
            style={{
              background:
                'linear-gradient(135deg, rgba(21,101,192,0.14), rgba(0,176,255,0.06))',
            }}
          >
            <div
              className='absolute inset-0 rounded-[22px] pointer-events-none'
              style={{ boxShadow: 'inset 0 0 0 1px rgba(0,176,255,0.1)' }}
            />
            <div className='relative z-10'>
              <h3 className='text-[0.98rem] font-black text-white mb-1'>
                Don't see your project? We probably handle it.
              </h3>
              <p className='text-[0.84rem] text-muted leading-[1.7]'>
                Centereach, Selden, Stony Brook, Smithtown, Hauppauge, Commack,
                Ronkonkoma, and all of Long Island.
              </p>
            </div>
            <Link to='/contact' className='btn-grad shrink-0 relative z-10'>
              <i className='fas fa-paper-plane' /> Describe your project
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
