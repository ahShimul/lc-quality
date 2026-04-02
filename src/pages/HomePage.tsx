import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { BeforeAfterSlider } from '../components/sections/BeforeAfterSlider';
import { AreasSection } from '../components/sections/AreasSection';
import { CtaBand } from '../components/sections/CtaBand';

const quickWins = [
  {
    icon: 'phone-volume',
    title: 'Call Anytime',
    desc: 'Mon – Sat, 7 AM – 7 PM',
  },
  {
    icon: 'dollar-sign',
    title: 'Free Estimates',
    desc: 'No charge, no obligation',
  },
  {
    icon: 'id-badge',
    title: 'Fully Licensed',
    desc: 'NY State licensed & insured',
  },
  {
    icon: 'medal',
    title: 'Warranty Included',
    desc: 'Written warranty on every job',
  },
];

const featuredServices = [
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    tag: 'Interior',
    icon: 'utensils',
    accentFrom: '#C45000',
    accentTo: '#FF8C00',
    img: '/images/kitchen.jpg',
    desc: 'Complete kitchen remodels from layout and design to cabinets, countertops, and lighting — for Centereach and Long Island homeowners.',
    bullets: [
      'Full gut remodels & redesigns',
      'Custom cabinets & islands',
      'Quartz & granite countertops',
      'Backsplash tile & recessed lighting',
    ],
    linkLabel: 'Get a kitchen estimate',
  },
  {
    slug: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    tag: 'Interior',
    icon: 'shower',
    accentFrom: '#006994',
    accentTo: '#26C6DA',
    img: '/images/bathroom.jpg',
    desc: 'Bathroom renovations that upgrade tile, fixtures, and layouts — turning outdated spaces into clean, modern bathrooms.',
    bullets: [
      'Walk-in showers & glass enclosures',
      'Floor & wall tile installation',
      'Vanities, toilets & plumbing fixtures',
      'Waterproofing & ventilation',
    ],
    linkLabel: 'Get a bathroom quote',
  },
  {
    slug: 'basement-sump-pump-installation',
    title: 'Basement Sump Pump Installation',
    tag: 'Exterior',
    icon: 'bolt',
    accentFrom: '#8B6000',
    accentTo: '#FFC107',
    img: '/images/basement-sump-pump-installation.png',
    desc: "Protect your basement from flooding with our expert sump pump installation services. We assess your basement's needs and install reliable pumps to keep your home dry.",
    bullets: [
      'Sump pump installation & replacement',
      'Battery backup systems for power outages',
      'Sump pit cleaning & maintenance',
      'Waterproofing solutions to prevent leaks',
    ],
    linkLabel: 'Get a sump pump estimate',
  },
];

const gridServices = [
  {
    slug: 'deck-outdoor',
    icon: 'tree',
    color: 'from-[#2E7D32] to-[#66BB6A]',
    img: '/images/deck.jpg',
    title: 'Deck Building & Outdoor Living',
    desc: 'Custom wood and composite decks, pergolas, and railings built for Long Island weather.',
    tag: 'Exterior',
  },
  {
    slug: 'roofing',
    icon: 'home',
    color: 'from-[#1A237E] to-[#3949AB]',
    img: '/images/roofing.jpg',
    title: 'Exterior Repairs',
    desc: 'Roof replacement, leak repair, gutters, and fascia to keep your home protected.',
    tag: 'Exterior',
  },
  {
    slug: 'flooring',
    icon: 'th-large',
    color: 'from-[#5D4037] to-[#A1887F]',
    img: '/images/flooring.jpg',
    title: 'Flooring Installation',
    desc: 'Hardwood, luxury vinyl plank, and tile floors installed throughout your home.',
    tag: 'Interior',
  },
  {
    slug: 'basement-finishing',
    icon: 'couch',
    color: 'from-[#4A148C] to-[#7B1FA2]',
    img: '/images/basement.jpg',
    title: 'Basement Finishing',
    desc: 'Turn unfinished basements into living rooms, home offices, gyms, or in-law suites.',
    tag: 'Interior',
  },
  {
    slug: 'doors-windows',
    icon: 'door-open',
    color: 'from-[#01579B] to-[#0288D1]',
    img: '/images/living-room.jpg',
    title: 'Doors & Windows',
    desc: 'Energy-efficient replacements that improve comfort, curb appeal, and utility bills.',
    tag: 'Exterior',
  },
  {
    slug: 'painting',
    icon: 'paint-roller',
    color: 'from-[#B71C1C] to-[#E53935]',
    img: '/images/painting.jpg',
    title: 'Interior & Exterior Painting',
    desc: 'Professional painting with proper prep, caulking, and premium products.',
    tag: 'Interior • Exterior',
  },
];

const reviews = [
  {
    text: '"LC Quality transformed our kitchen completely. Respectful, clean, and the result is absolutely stunning."',
    name: 'Maria R.',
    loc: 'Smithtown, NY',
    init: 'MR',
  },
  {
    text: '"They showed up on time every day and finished on schedule. Our new deck is the talk of the neighborhood."',
    name: 'James T.',
    loc: 'Commack, NY',
    init: 'JT',
  },
  {
    text: '"Transparent pricing, great communication, and the tile work is perfection. Highly recommend."',
    name: 'Sandra B.',
    loc: 'Stony Brook, NY',
    init: 'SB',
  },
  {
    text: '"Basement finishing, electrical panel, and painting all done at once. Completely seamless."',
    name: 'David L.',
    loc: 'Hauppauge, NY',
    init: 'DL',
  },
  {
    text: '"Stress-free from estimate to walkthrough. I\'ve already referred them to three of my neighbors."',
    name: 'Angela P.',
    loc: 'Centereach, NY',
    init: 'AP',
  },
  {
    text: '"New roof, gutters, and windows — professional crew, outstanding quality. Best investment we\'ve made."',
    name: 'Kevin M.',
    loc: 'Ronkonkoma, NY',
    init: 'KM',
  },
];

const processSteps = [
  {
    num: '01',
    icon: 'comments',
    title: 'We Listen',
    desc: 'Tell us your vision, timeline, and budget — zero pressure.',
  },
  {
    num: '02',
    icon: 'file-invoice-dollar',
    title: 'Free Estimate',
    desc: 'Written quote — clear pricing, no hidden costs.',
  },
  {
    num: '03',
    icon: 'pencil-ruler',
    title: 'Design',
    desc: "We help you choose materials and finishes you'll love.",
  },
  {
    num: '04',
    icon: 'hard-hat',
    title: 'We Build',
    desc: 'Licensed crew on-site, on time, with daily updates.',
  },
  {
    num: '05',
    icon: 'trophy',
    title: 'Final Walkthrough',
    desc: "You inspect every inch. We don't leave until you're happy.",
  },
];

const compareRows = [
  { feature: 'Licensed & Insured', us: '✔', chain: '✔', unlic: '✘' },
  { feature: 'Free Written Estimate', us: '✔', chain: '✘', unlic: '✔' },
  { feature: 'Local Long Island Team', us: '✔', chain: '✘', unlic: 'Varies' },
  { feature: 'Transparent Pricing', us: '✔', chain: '✘', unlic: 'Varies' },
  { feature: 'Written Warranty', us: '✔', chain: 'Limited', unlic: '✘' },
  { feature: 'All Trades In-House', us: '✔', chain: '✘', unlic: '✘' },
  { feature: 'One Point of Contact', us: '✔', chain: '✘', unlic: 'Varies' },
  {
    feature: '5-Star Google Reviews',
    us: '✔ 150+',
    chain: 'Mixed',
    unlic: 'Few',
  },
];

export function HomePage() {
  const fadeRef = useFadeIn();

  return (
    <div ref={fadeRef}>
      <Helmet>
        <title>
          LC Quality Improvements | Home Improvement Contractor Centereach NY
        </title>
        <meta
          name='description'
          content='LC Quality Improvements is a licensed home improvement contractor in Centereach, NY. Kitchens, bathrooms, decks, roofing, flooring & electrical for Long Island homes.'
        />
      </Helmet>

      {/* HERO */}
      <section
        className='relative min-h-screen pt-[68px] flex items-center justify-center text-center overflow-hidden'
        style={{
          background:
            'linear-gradient(160deg, #060F1E 0%, #0C2040 55%, #091830 100%)',
        }}
      >
        <div
          className='absolute inset-0 z-0 bg-cover bg-center opacity-10'
          style={{ backgroundImage: "url('/images/kitchen.jpg')" }}
        />
        <div
          className='absolute w-[700px] h-[700px] -top-[200px] -right-[200px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(0,176,255,0.14) 0%, transparent 65%)',
          }}
        />
        <div
          className='absolute w-[600px] h-[600px] -bottom-[220px] -left-[180px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(21,101,192,0.16) 0%, transparent 65%)',
          }}
        />

        <div className='relative z-10 max-w-[800px] w-[90%] mx-auto py-16'>
          <div className='inline-flex items-center gap-2 bg-[rgba(0,176,255,0.1)] border border-[rgba(0,176,255,0.3)] px-4 py-[0.38rem] rounded-full text-[0.78rem] text-ice font-extrabold tracking-wider mb-6 fi'>
            <i className='fas fa-shield-halved' /> Licensed • Insured • Long
            Island Local
          </div>

          <h1 className='text-[clamp(2.6rem,6vw,4.6rem)] font-black leading-[1.06] tracking-[-2px] text-white mb-5 fi'>
            Long Island's Trusted
            <br />
            <em className='not-italic text-ice'>Home Improvement Contractor</em>
          </h1>

          <p className='text-[1.1rem] text-muted leading-[1.78] max-w-[620px] mx-auto mb-9 fi'>
            From kitchen remodels and bathroom renovations to decks, roofing,
            electrical, and flooring — LC Quality Improvements delivers clean
            workmanship and honest pricing for homeowners across Centereach and
            all of Long Island.
          </p>

          <div className='flex gap-4 justify-center flex-wrap mb-11 fi'>
            <Link to='/contact' className='btn-grad'>
              <i className='fas fa-clipboard-check' /> Get a Free Estimate
            </Link>
            <Link to='/services' className='btn-ghost'>
              <i className='fas fa-layer-group' /> See Our Services
            </Link>
            <a href='tel:6311112222' className='btn-ghost'>
              <i className='fas fa-phone' /> 631-111-2222
            </a>
          </div>

          <div className='flex justify-center gap-5 flex-wrap px-7 py-5 bg-[rgba(255,255,255,0.04)] border border-gline rounded-[20px] mb-6 fi'>
            {[
              { icon: 'star', text: '5.0 Google Rating' },
              { icon: 'hammer', text: '500+ Projects' },
              { icon: 'clock', text: '24-Hour Response' },
              { icon: 'file-signature', text: 'Written Estimates' },
            ].map((t, i) => (
              <span
                key={i}
                className='flex items-center gap-2 text-[0.85rem] font-bold text-text'
              >
                <i className={`fas fa-${t.icon} text-ice`} /> {t.text}
              </span>
            ))}
          </div>

          <div className='flex items-center justify-center gap-2 text-muted text-[0.82rem] fi'>
            <i className='fas fa-location-dot text-ice' />
            Based in Centereach, NY • Serving all of Nassau & Suffolk County
          </div>
        </div>
      </section>

      {/* QUICK WINS */}
      <div className='bg-navy2 py-[2.4rem] px-[6%] border-b border-gline'>
        <div className='max-w-[1180px] mx-auto grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1 fi'>
          {quickWins.map((qw) => (
            <div
              key={qw.title}
              className='bg-[rgba(255,255,255,0.04)] border border-gline rounded-[18px] p-5 flex gap-3 items-start'
            >
              <div className='w-[42px] h-[42px] rounded-xl shrink-0 bg-gradient-to-br from-blue to-ice flex items-center justify-center text-white text-base'>
                <i className={`fas fa-${qw.icon}`} />
              </div>
              <div>
                <strong className='block font-extrabold text-white text-[0.92rem] mb-[0.15rem]'>
                  {qw.title}
                </strong>
                <span className='text-[0.78rem] text-muted'>{qw.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section
        id='services'
        className='relative py-20 px-[6%] bg-navy overflow-hidden'
      >
        {/* Ambient glow */}
        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none opacity-40'
          style={{
            background:
              'radial-gradient(ellipse, rgba(21,101,192,0.12) 0%, transparent 70%)',
          }}
        />

        <div className='max-w-[1220px] mx-auto relative z-10'>
          {/* ── Section head ── */}
          <div className='text-center mb-12 fi'>
            <div className='inline-flex items-center gap-3 mb-3'>
              <span
                className='w-10 h-px'
                style={{
                  background: 'linear-gradient(to right, transparent, #00B0FF)',
                }}
              />
              <span className='text-ice text-[0.72rem] font-extrabold tracking-[2.5px] uppercase'>
                What We Do
              </span>
              <span
                className='w-10 h-px'
                style={{
                  background: 'linear-gradient(to left, transparent, #00B0FF)',
                }}
              />
            </div>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              Home Improvement Services
              <br />
              <span className='text-ice'>Across Long Island</span>
            </h2>
            <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto'>
              Full-service interior remodeling, exterior upgrades, and licensed
              electrical — all handled by our local Centereach, NY team.
            </p>
          </div>

          {/* ── Bento featured grid ── */}
          <div className='flex gap-4 mb-4 items-stretch max-[820px]:flex-col fi'>
            {/* Kitchen — large cinematic card */}
            <Link
              to={`/services/${featuredServices[0].slug}`}
              className='group relative overflow-hidden rounded-[22px] flex-none cursor-pointer'
              style={{ width: '57%', minHeight: '480px' }}
            >
              <img
                src={featuredServices[0].img}
                alt={featuredServices[0].title}
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]'
              />
              {/* Base dark vignette */}
              <div
                className='absolute inset-0'
                style={{
                  background:
                    'linear-gradient(to top, rgba(4,9,20,0.97) 0%, rgba(4,9,20,0.45) 45%, rgba(4,9,20,0.12) 100%)',
                }}
              />
              {/* Hover ice tint */}
              <div
                className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,176,255,0.14) 0%, transparent 55%)',
                }}
              />
              {/* Glow border */}
              <div
                className='absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                style={{ boxShadow: 'inset 0 0 0 1.5px rgba(0,176,255,0.55)' }}
              />
              {/* Tag pill */}
              <div
                className='absolute top-4 left-4 text-[0.62rem] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md'
                style={{
                  background: 'rgba(4,9,20,0.82)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  color: 'rgba(210,235,255,0.95)',
                }}
              >
                {featuredServices[0].tag}
              </div>
              {/* Ghost number */}
              <span
                className='absolute right-5 top-6 text-[7rem] font-black leading-none pointer-events-none select-none'
                style={{
                  color: 'rgba(255,255,255,0.045)',
                  letterSpacing: '-4px',
                }}
              >
                01
              </span>
              {/* Bottom content */}
              <div className='absolute bottom-0 left-0 right-0 p-7'>
                <div
                  className='h-[3px] w-10 group-hover:w-20 rounded-full mb-3 transition-all duration-500'
                  style={{
                    background: `linear-gradient(90deg, ${featuredServices[0].accentFrom}, ${featuredServices[0].accentTo})`,
                  }}
                />
                <h3 className='text-[1.5rem] font-black text-white leading-snug mb-2 transition-colors duration-200 group-hover:text-ice'>
                  {featuredServices[0].title}
                </h3>
                <p
                  className='text-[0.85rem] leading-relaxed mb-4 max-w-[380px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300'
                  style={{ color: 'rgba(195,220,245,0.78)' }}
                >
                  {featuredServices[0].desc}
                </p>
                <div
                  className='flex flex-wrap gap-[0.28rem] mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  style={{ transitionDelay: '60ms' }}
                >
                  {featuredServices[0].bullets.map((b) => (
                    <span
                      key={b}
                      className='inline-flex items-center gap-1 text-[0.62rem] font-semibold px-2 py-[0.2rem] rounded-md'
                      style={{
                        background: 'rgba(0,176,255,0.1)',
                        border: '1px solid rgba(0,176,255,0.28)',
                        color: 'rgba(170,215,255,0.9)',
                      }}
                    >
                      <i className='fas fa-check text-[0.44rem] text-ice' />
                      {b}
                    </span>
                  ))}
                </div>
                <span
                  className='inline-flex items-center gap-2 text-[0.82rem] font-bold text-ice opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  style={{ transitionDelay: '100ms' }}
                >
                  {featuredServices[0].linkLabel}
                  <span className='flex items-center justify-center w-6 h-6 rounded-full bg-ice text-navy text-[0.58rem]'>
                    <i className='fas fa-arrow-right' />
                  </span>
                </span>
              </div>
            </Link>

            {/* Right column: Bathroom + Electrical stacked */}
            <div className='flex flex-col gap-4 flex-1 max-[820px]:flex-row max-[560px]:flex-col'>
              {[featuredServices[1], featuredServices[2]].map((svc, idx) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className='group relative overflow-hidden rounded-[22px] flex-1 cursor-pointer'
                  style={{ minHeight: '225px' }}
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
                        'linear-gradient(to top, rgba(4,9,20,0.97) 0%, rgba(4,9,20,0.35) 55%, rgba(4,9,20,0.08) 100%)',
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
                    style={{
                      boxShadow: 'inset 0 0 0 1.5px rgba(0,176,255,0.5)',
                    }}
                  />
                  {/* Tag */}
                  <div
                    className='absolute top-3 left-3 text-[0.6rem] font-extrabold uppercase tracking-wider px-[0.6rem] py-[0.22rem] rounded-full backdrop-blur-md'
                    style={{
                      background: 'rgba(4,9,20,0.82)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'rgba(210,235,255,0.95)',
                    }}
                  >
                    {svc.tag}
                  </div>
                  {/* Ghost number */}
                  <span
                    className='absolute right-4 top-3 text-[4.5rem] font-black leading-none pointer-events-none select-none'
                    style={{
                      color: 'rgba(255,255,255,0.04)',
                      letterSpacing: '-3px',
                    }}
                  >
                    0{idx + 2}
                  </span>
                  {/* Bottom content */}
                  <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <div
                      className='h-[2.5px] w-7 group-hover:w-12 rounded-full mb-2 transition-all duration-500'
                      style={{
                        background: `linear-gradient(90deg, ${svc.accentFrom}, ${svc.accentTo})`,
                      }}
                    />
                    <h3 className='text-[1.05rem] font-black text-white leading-snug mb-1 transition-colors duration-200 group-hover:text-ice'>
                      {svc.title}
                    </h3>
                    <p
                      className='text-[0.77rem] leading-relaxed mb-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300'
                      style={{
                        color: 'rgba(190,215,240,0.75)',
                        transitionDelay: '40ms',
                      }}
                    >
                      {svc.desc}
                    </p>
                    <span
                      className='inline-flex items-center gap-1 text-[0.75rem] font-bold text-ice opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      style={{ transitionDelay: '80ms' }}
                    >
                      {svc.linkLabel}{' '}
                      <i className='fas fa-arrow-right text-[0.58rem]' />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Secondary services — 3-col image grid ── */}
          <div className='grid grid-cols-3 gap-4 mb-6 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1'>
            {gridServices.map((svc, i) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className='group relative overflow-hidden rounded-[20px] cursor-pointer fi'
                style={{ height: '290px', transitionDelay: `${i * 55}ms` }}
              >
                <img
                  src={svc.img}
                  alt={svc.title}
                  className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]'
                />
                {/* Dark scrim */}
                <div
                  className='absolute inset-0'
                  style={{
                    background:
                      'linear-gradient(to top, rgba(4,9,20,0.97) 0%, rgba(4,9,20,0.25) 55%, rgba(4,9,20,0.06) 100%)',
                  }}
                />
                {/* Hover ice tint */}
                <div
                  className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,176,255,0.1) 0%, transparent 50%)',
                  }}
                />
                {/* Glow border */}
                <div
                  className='absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                  style={{
                    boxShadow: 'inset 0 0 0 1.5px rgba(0,176,255,0.45)',
                  }}
                />

                {/* Top-left: colored icon badge */}
                <div
                  className={`absolute top-4 left-4 w-9 h-9 rounded-[11px] flex items-center justify-center text-white text-sm shadow-lg transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br ${svc.color}`}
                >
                  <i className={`fas fa-${svc.icon}`} />
                </div>
                {/* Top-right: tag pill */}
                <div
                  className='absolute top-4 right-4 text-[0.58rem] font-extrabold uppercase tracking-wider px-2 py-[0.18rem] rounded-full backdrop-blur-md'
                  style={{
                    background: 'rgba(4,9,20,0.8)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: 'rgba(200,225,255,0.85)',
                  }}
                >
                  {svc.tag}
                </div>

                {/* Bottom content */}
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
                    className='flex items-center gap-[0.4rem] text-[0.72rem] font-bold text-ice -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-250'
                    style={{ transitionDelay: '80ms' }}
                  >
                    View Service{' '}
                    <i className='fas fa-arrow-right text-[0.58rem]' />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── SEO / area strip ── */}
          <div
            className='relative overflow-hidden p-6 rounded-[22px] border border-gline flex items-center justify-between gap-6 flex-wrap max-[700px]:flex-col fi'
            style={{
              background:
                'linear-gradient(135deg, rgba(21,101,192,0.14), rgba(0,176,255,0.06))',
            }}
          >
            <div
              className='absolute inset-0 pointer-events-none'
              style={{
                background:
                  'radial-gradient(ellipse at 0% 50%, rgba(21,101,192,0.2), transparent 55%)',
                borderRadius: 'inherit',
              }}
            />
            <div
              className='absolute inset-0 rounded-[22px] pointer-events-none'
              style={{ boxShadow: 'inset 0 0 0 1px rgba(0,176,255,0.12)' }}
            />
            <div className='relative z-10'>
              <h3 className='text-[0.98rem] font-black text-white mb-1'>
                Don't see your project? We probably handle it.
              </h3>
              <p className='text-[0.84rem] text-muted max-w-[540px] leading-[1.7]'>
                We serve Centereach, Selden, Stony Brook, Smithtown, Hauppauge,
                Commack, Ronkonkoma, and all of Long Island.
              </p>
            </div>
            <Link to='/contact' className='btn-grad shrink-0 relative z-10'>
              <i className='fas fa-paper-plane' /> Describe your project
            </Link>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section id='transformations' className='py-20 px-[6%] bg-navy2'>
        <div className='max-w-[1180px] mx-auto'>
          <div className='text-center mb-11 fi'>
            <div className='inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2'>
              Real Results
            </div>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              Before & After Transformations
            </h2>
            <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto'>
              Drag the slider on each photo to see the difference. Real Long
              Island homes.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-[1.4rem] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1'>
            <div className='fi'>
              <BeforeAfterSlider
                beforeSrc='/images/kitchen.jpg'
                afterSrc='/images/kitchen.jpg'
                title='Kitchen Renovation — Stony Brook'
                description='New cabinets, quartz counters & recessed lighting'
              />
            </div>
            <div className='fi'>
              <BeforeAfterSlider
                beforeSrc='/images/bathroom.jpg'
                afterSrc='/images/bathroom.jpg'
                title='Master Bathroom — Smithtown'
                description='Walk-in shower, heated floors & custom tile'
              />
            </div>
            <div className='fi'>
              <BeforeAfterSlider
                beforeSrc='/images/deck.png'
                afterSrc='/images/deck.png'
                title='Composite Deck — Commack'
                description='Multi-level deck with built-in bench & pergola'
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id='process'
        className='relative py-20 px-[6%] bg-navy overflow-hidden'
      >
        {/* Ambient glow */}
        <div
          className='absolute bottom-0 right-1/4 w-[600px] h-[500px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse, rgba(0,176,255,0.06) 0%, transparent 70%)',
          }}
        />

        <div className='max-w-[1180px] mx-auto relative z-10'>
          {/* ── Section head ── */}
          <div className='text-center mb-10 fi'>
            <div className='inline-flex items-center gap-3 mb-3'>
              <span
                className='w-10 h-px'
                style={{
                  background: 'linear-gradient(to right, transparent, #00B0FF)',
                }}
              />
              <span className='text-ice text-[0.72rem] font-extrabold tracking-[2.5px] uppercase'>
                How It Works
              </span>
              <span
                className='w-10 h-px'
                style={{
                  background: 'linear-gradient(to left, transparent, #00B0FF)',
                }}
              />
            </div>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              Simple 5-Step Process
            </h2>
            <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto'>
              No guesswork, no stress. Here's exactly what to expect from your
              first call to the final walkthrough.
            </p>
          </div>

          {/* ── Horizontal sequential tracker ── */}
          <div className='relative flex items-start justify-between mb-10 px-2 fi max-[700px]:hidden'>
            {/* Track line */}
            <div
              className='absolute left-[18px] right-[18px] top-[18px] h-px'
              style={{
                background:
                  'linear-gradient(to right, rgba(0,176,255,0.5) 0%, rgba(0,176,255,0.5) 80%, rgba(0,176,255,0.15) 100%)',
              }}
            />
            {processSteps.map((s, i) => (
              <div
                key={s.num}
                className='relative z-10 flex flex-col items-center gap-[0.45rem]'
                style={{ width: '20%' }}
              >
                <div
                  className='w-9 h-9 rounded-full flex items-center justify-center text-[0.78rem] font-black border-2 transition-all duration-200'
                  style={{
                    background: i === 4 ? '#00B0FF' : '#05101F',
                    borderColor: '#00B0FF',
                    color: i === 4 ? '#05101F' : '#00B0FF',
                    boxShadow:
                      i === 4 ? '0 0 16px rgba(0,176,255,0.5)' : undefined,
                  }}
                >
                  {s.num}
                </div>
                <span className='text-[0.68rem] font-bold text-muted text-center leading-snug'>
                  {s.title}
                </span>
              </div>
            ))}
          </div>

          {/* ── Bento grid ── */}
          <div className='grid grid-cols-3 gap-5 items-stretch max-[900px]:grid-cols-1'>
            {/* Steps 01–04: 2×2 sub-grid */}
            <div className='col-span-2 grid grid-cols-2 gap-5 max-[600px]:grid-cols-1'>
              {processSteps.slice(0, 4).map((s) => (
                <div
                  key={s.num}
                  className='group relative bg-[rgba(255,255,255,0.04)] border border-gline rounded-[22px] p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,176,255,0.4)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.55)] fi'
                >
                  {/* Hover glow overlay */}
                  <div
                    className='absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                    style={{
                      background:
                        'radial-gradient(ellipse at 0% 0%, rgba(0,176,255,0.06), transparent 60%)',
                    }}
                  />

                  {/* Icon circle — reference style */}
                  <div
                    className='w-[52px] h-[52px] rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:border-ice group-hover:shadow-[0_0_18px_rgba(0,176,255,0.3)]'
                    style={{
                      borderColor: 'rgba(0,176,255,0.3)',
                      background: 'rgba(0,176,255,0.06)',
                    }}
                  >
                    <i className={`fas fa-${s.icon} text-ice text-[1.05rem]`} />
                  </div>

                  <div className='relative z-10'>
                    <div className='text-[0.6rem] font-black text-ice uppercase tracking-[2.5px] mb-2'>
                      Step {s.num}
                    </div>
                    <h3 className='text-[1.06rem] font-black text-white mb-2 leading-snug transition-colors duration-200 group-hover:text-ice'>
                      {s.title}
                    </h3>
                    <p className='text-[0.83rem] text-muted leading-[1.65]'>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Step 05 — Featured highlighted card */}
            <div
              className='relative overflow-hidden rounded-[22px] p-8 flex flex-col fi'
              style={{
                background:
                  'linear-gradient(155deg, #0D47A1 0%, #0a2d6e 50%, #061d4a 100%)',
                border: '1px solid rgba(0,176,255,0.28)',
                minHeight: '420px',
              }}
            >
              {/* Radial bloom */}
              <div
                className='absolute inset-0 pointer-events-none'
                style={{
                  background:
                    'radial-gradient(ellipse at 15% 85%, rgba(0,176,255,0.22), transparent 60%)',
                }}
              />
              {/* Corner glow top-right */}
              <div
                className='absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none'
                style={{
                  background:
                    'radial-gradient(circle, rgba(0,176,255,0.12), transparent 70%)',
                }}
              />

              <div className='relative z-10 flex flex-col h-full'>
                {/* Step badge row */}
                <div className='flex items-center gap-3 mb-7'>
                  <div
                    className='w-9 h-9 rounded-full flex items-center justify-center text-[0.78rem] font-black'
                    style={{
                      background: '#00B0FF',
                      color: '#05101F',
                      boxShadow: '0 0 20px rgba(0,176,255,0.5)',
                    }}
                  >
                    05
                  </div>
                  <span
                    className='text-[0.68rem] font-extrabold uppercase tracking-[2px]'
                    style={{ color: 'rgba(0,176,255,0.8)' }}
                  >
                    Final Step
                  </span>
                </div>

                {/* Icon circle */}
                <div
                  className='w-14 h-14 rounded-full border-2 border-ice flex items-center justify-center mb-6'
                  style={{
                    background: 'rgba(0,176,255,0.14)',
                    boxShadow: '0 0 24px rgba(0,176,255,0.25)',
                  }}
                >
                  <i className='fas fa-trophy text-ice text-xl' />
                </div>

                <h3 className='text-[1.65rem] font-black text-white leading-snug mb-4'>
                  {processSteps[4].title}
                </h3>
                <p
                  className='text-[0.88rem] leading-[1.72] mb-4'
                  style={{ color: 'rgba(200,225,250,0.82)' }}
                >
                  {processSteps[4].desc}
                </p>
                <p
                  className='text-[0.83rem] leading-[1.7]'
                  style={{ color: 'rgba(170,200,235,0.58)' }}
                >
                  Whether you're remodeling a kitchen or finishing a basement —
                  you inspect every detail before we close out. Your
                  satisfaction is the only sign-off we need.
                </p>

                <div className='mt-auto pt-8'>
                  <Link
                    to='/contact'
                    className='btn-grad w-full justify-center'
                  >
                    <i className='fas fa-clipboard-check' /> Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id='compare' className='py-20 px-[6%] bg-navy2'>
        <div className='max-w-[1180px] mx-auto'>
          <div className='text-center mb-11 fi'>
            <div className='inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2'>
              Why Choose Us
            </div>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              LC Quality vs. The Other Guys
            </h2>
            <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto'>
              See why Long Island homeowners trust us over big chains and
              unlicensed crews.
            </p>
          </div>
          <div className='overflow-x-auto rounded-3xl border border-gline fi'>
            <table className='w-full border-collapse min-w-[540px]'>
              <thead>
                <tr>
                  <th className='p-[0.85rem] text-left text-[0.78rem] font-extrabold uppercase tracking-wider bg-blue2 text-white'>
                    What You Get
                  </th>
                  <th className='p-[0.85rem] text-center text-[0.78rem] font-extrabold uppercase tracking-wider bg-gradient-to-br from-blue to-ice text-white'>
                    LC Quality ✦
                  </th>
                  <th className='p-[0.85rem] text-center text-[0.78rem] font-extrabold uppercase tracking-wider bg-blue2 text-white'>
                    Big-Box Chains
                  </th>
                  <th className='p-[0.85rem] text-center text-[0.78rem] font-extrabold uppercase tracking-wider bg-blue2 text-white'>
                    Unlicensed Crew
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i % 2 === 1 ? 'bg-[rgba(255,255,255,0.024)]' : ''
                    }
                  >
                    <td className='p-[0.85rem] text-left text-[0.86rem] border-b border-[rgba(255,255,255,0.06)]'>
                      {row.feature}
                    </td>
                    <td className='p-[0.85rem] text-center text-[0.86rem] border-b border-[rgba(255,255,255,0.06)] bg-[rgba(0,176,255,0.07)]'>
                      <span
                        className={
                          row.us.includes('✔')
                            ? 'text-[#00E676]'
                            : 'text-[#FF5252]'
                        }
                      >
                        {row.us}
                      </span>
                    </td>
                    <td className='p-[0.85rem] text-center text-[0.86rem] border-b border-[rgba(255,255,255,0.06)]'>
                      <span
                        className={
                          row.chain === '✔'
                            ? 'text-[#00E676]'
                            : row.chain === '✘'
                              ? 'text-[#FF5252]'
                              : 'text-muted'
                        }
                      >
                        {row.chain}
                      </span>
                    </td>
                    <td className='p-[0.85rem] text-center text-[0.86rem] border-b border-[rgba(255,255,255,0.06)]'>
                      <span
                        className={
                          row.unlic === '✔'
                            ? 'text-[#00E676]'
                            : row.unlic === '✘'
                              ? 'text-[#FF5252]'
                              : 'text-muted'
                        }
                      >
                        {row.unlic}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id='reviews' className='py-20 bg-navy overflow-hidden'>
        {/* Section head */}
        <div className='px-[6%] text-center mb-11 fi'>
          <div className='inline-flex items-center gap-3 mb-3'>
            <span
              className='w-10 h-px'
              style={{
                background: 'linear-gradient(to right, transparent, #00B0FF)',
              }}
            />
            <span className='text-ice text-[0.72rem] font-extrabold tracking-[2.5px] uppercase'>
              Testimonials
            </span>
            <span
              className='w-10 h-px'
              style={{
                background: 'linear-gradient(to left, transparent, #00B0FF)',
              }}
            />
          </div>
          <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
            Homeowners Love the Results
          </h2>
          <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto'>
            Over 150 five-star reviews from real Long Island homeowners.
          </p>
        </div>

        {/* Marquee wrapper — fade edges so centre stays in focus */}
        <div
          className='relative'
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)',
          }}
        >
          {/* Row 1 — scrolls left */}
          <div
            className='flex gap-5 mb-5'
            style={{
              width: 'max-content',
              animation: 'marquee 50s linear infinite',
            }}
          >
            {[...reviews, ...reviews].map((r, i) => (
              <div
                key={i}
                className='bg-glass border border-gline rounded-3xl p-6 flex flex-col shrink-0'
                style={{ width: '340px' }}
              >
                <div className='text-[#FFD740] text-[0.85rem] tracking-widest mb-3'>
                  ★★★★★
                </div>
                <p className='text-[0.84rem] text-muted leading-[1.72] italic mb-5 flex-1'>
                  {r.text}
                </p>
                <div className='flex items-center gap-3'>
                  <div
                    className='w-9 h-9 rounded-full flex items-center justify-center font-black text-[0.82rem] text-white shrink-0'
                    style={{
                      background: 'linear-gradient(135deg, #1565C0, #00B0FF)',
                    }}
                  >
                    {r.init}
                  </div>
                  <div>
                    <div className='font-extrabold text-[0.86rem] text-white'>
                      {r.name}
                    </div>
                    <div className='text-[0.72rem] text-muted'>{r.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right (opposite direction) */}
          <div
            className='flex gap-5'
            style={{
              width: 'max-content',
              animation: 'marquee-rev 65s linear infinite',
            }}
          >
            {[
              ...reviews.slice(3),
              ...reviews.slice(0, 3),
              ...reviews.slice(3),
              ...reviews.slice(0, 3),
            ].map((r, i) => (
              <div
                key={i}
                className='bg-glass border border-gline rounded-3xl p-6 flex flex-col shrink-0'
                style={{ width: '340px' }}
              >
                <div className='text-[#FFD740] text-[0.85rem] tracking-widest mb-3'>
                  ★★★★★
                </div>
                <p className='text-[0.84rem] text-muted leading-[1.72] italic mb-5 flex-1'>
                  {r.text}
                </p>
                <div className='flex items-center gap-3'>
                  <div
                    className='w-9 h-9 rounded-full flex items-center justify-center font-black text-[0.82rem] text-white shrink-0'
                    style={{
                      background: 'linear-gradient(135deg, #1565C0, #00B0FF)',
                    }}
                  >
                    {r.init}
                  </div>
                  <div>
                    <div className='font-extrabold text-[0.86rem] text-white'>
                      {r.name}
                    </div>
                    <div className='text-[0.72rem] text-muted'>{r.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AreasSection />

      <CtaBand />

      {/* CONTACT */}
      <section id='contact' className='py-20 px-[6%] bg-navy'>
        <div className='max-w-[1180px] mx-auto'>
          <div className='mb-11 fi'>
            <div className='inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2'>
              Contact Us
            </div>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              Get Your Free Estimate
            </h2>
            <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px]'>
              Fill in the form and we'll reach out within 24 hours to schedule
              your free, no-pressure estimate.
            </p>
          </div>
          <div className='grid grid-cols-[1fr_1.35fr] gap-14 items-start max-[800px]:grid-cols-1'>
            <div className='fi'>
              {[
                {
                  icon: 'map-marker-alt',
                  title: 'Office',
                  desc: '14 Maple St, Centereach, NY 11720',
                },
                {
                  icon: 'phone',
                  title: 'Phone',
                  desc: '631-111-2222',
                  href: 'tel:6311112222',
                },
                {
                  icon: 'envelope',
                  title: 'Email',
                  desc: 'info@lcqualityimprovements.com',
                },
                {
                  icon: 'clock',
                  title: 'Hours',
                  desc: 'Mon – Sat: 7:00 AM – 7:00 PM',
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className='flex items-start gap-[0.9rem] mb-[1.1rem]'
                >
                  <div className='w-[42px] h-[42px] rounded-[11px] shrink-0 bg-gradient-to-br from-blue to-ice flex items-center justify-center text-[0.9rem] text-white'>
                    <i className={`fas fa-${c.icon}`} />
                  </div>
                  <div>
                    <strong className='block font-extrabold text-white text-[0.88rem]'>
                      {c.title}
                    </strong>
                    {c.href ? (
                      <a href={c.href} className='text-[0.82rem] text-ice'>
                        {c.desc}
                      </a>
                    ) : (
                      <span className='text-[0.82rem] text-muted'>
                        {c.desc}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector(
      '.f-submit',
    ) as HTMLButtonElement;
    if (btn) {
      btn.innerHTML = '<i class="fas fa-check"></i>&nbsp; Request Sent!';
      btn.style.background = 'linear-gradient(135deg, #00C853, #00E676)';
      setTimeout(() => {
        btn.innerHTML =
          '<i class="fas fa-paper-plane"></i>&nbsp; Send My Request';
        btn.style.background = '';
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }
  };

  return (
    <div className='bg-glass border border-gline rounded-3xl p-8 fi'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-4 max-[480px]:grid-cols-1'>
          <div className='mb-4'>
            <label className='block text-[0.73rem] font-black text-muted uppercase tracking-wider mb-1'>
              First Name
            </label>
            <input
              type='text'
              placeholder='John'
              required
              className='w-full bg-[rgba(255,255,255,0.05)] border border-gline rounded-2xl px-[0.95rem] py-3 text-white text-[0.88rem] outline-none transition-all focus:border-ice focus:bg-[rgba(0,176,255,0.06)]'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-[0.73rem] font-black text-muted uppercase tracking-wider mb-1'>
              Last Name
            </label>
            <input
              type='text'
              placeholder='Smith'
              required
              className='w-full bg-[rgba(255,255,255,0.05)] border border-gline rounded-2xl px-[0.95rem] py-3 text-white text-[0.88rem] outline-none transition-all focus:border-ice focus:bg-[rgba(0,176,255,0.06)]'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 max-[480px]:grid-cols-1'>
          <div className='mb-4'>
            <label className='block text-[0.73rem] font-black text-muted uppercase tracking-wider mb-1'>
              Phone
            </label>
            <input
              type='tel'
              placeholder='631-000-0000'
              required
              className='w-full bg-[rgba(255,255,255,0.05)] border border-gline rounded-2xl px-[0.95rem] py-3 text-white text-[0.88rem] outline-none transition-all focus:border-ice focus:bg-[rgba(0,176,255,0.06)]'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-[0.73rem] font-black text-muted uppercase tracking-wider mb-1'>
              Email
            </label>
            <input
              type='email'
              placeholder='john@email.com'
              required
              className='w-full bg-[rgba(255,255,255,0.05)] border border-gline rounded-2xl px-[0.95rem] py-3 text-white text-[0.88rem] outline-none transition-all focus:border-ice focus:bg-[rgba(0,176,255,0.06)]'
            />
          </div>
        </div>
        <div className='mb-4'>
          <label className='block text-[0.73rem] font-black text-muted uppercase tracking-wider mb-1'>
            Service Needed
          </label>
          <select
            required
            className='w-full bg-[rgba(255,255,255,0.05)] border border-gline rounded-2xl px-[0.95rem] py-3 text-white text-[0.88rem] outline-none transition-all focus:border-ice focus:bg-[rgba(0,176,255,0.06)]'
          >
            <option value='' disabled>
              Select a service...
            </option>
            <option>Kitchen Remodeling</option>
            <option>Bathroom Renovation</option>
            <option>Electrical Work</option>
            <option>Deck & Outdoor</option>
            <option>Roofing</option>
            <option>Flooring</option>
            <option>Basement Finishing</option>
            <option>Doors & Windows</option>
            <option>Painting</option>
            <option>Multiple / Other</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-[0.73rem] font-black text-muted uppercase tracking-wider mb-1'>
            Tell Us About Your Project
          </label>
          <textarea
            placeholder='Describe your project, timeline, budget, or any questions...'
            className='w-full bg-[rgba(255,255,255,0.05)] border border-gline rounded-2xl px-[0.95rem] py-3 text-white text-[0.88rem] outline-none transition-all focus:border-ice focus:bg-[rgba(0,176,255,0.06)] resize-y min-h-[100px]'
          />
        </div>
        <button
          type='submit'
          className='btn-grad w-full py-[0.88rem] text-[0.97rem] font-extrabold justify-center f-submit'
        >
          <i className='fas fa-paper-plane' /> Send My Request
        </button>
      </form>
    </div>
  );
}
