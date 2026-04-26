import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CtaBand } from '../components/sections/CtaBand';

const allServices = [
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodels',
    num: '01',
    tag: 'Signature · Interior',
    desc: 'Cabinets, stone counters, tile, headers, lighting, electrical — scoped and delivered turnkey.',
    time: '3–6 weeks',
    from: 'from $28k',
    span: 3,
    tall: true,
    accent: true,
    img: '/images/kitchen.jpg',
  },
  {
    slug: 'bathroom-renovation',
    title: 'Bathroom Renovations',
    num: '02',
    tag: 'Signature · Interior',
    desc: 'Custom tile, walk-in showers, vanities, full re-plumbs. Built to last.',
    time: '2–4 weeks',
    from: 'from $14k',
    span: 3,
    tall: true,
    img: '/images/bathroom.jpg',
  },
  {
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    num: '03',
    tag: 'Interior',
    desc: 'Legal egress, framing, insulation, drywall, flooring — full build-outs.',
    time: '4–8 wks',
    from: 'from $22k',
    span: 2,
    img: '/images/basement.jpg',
  },
  {
    slug: 'basement-sump-pump-installation',
    title: 'Sump Pump Installation',
    num: '04',
    tag: 'Basement · Waterproofing',
    desc: 'Protect your basement from flooding with expert sump pump installation.',
    time: '1–2 days',
    from: 'quote on scope',
    span: 2,
    dark: true,
    img: '/images/basement-sump-pump-installation.png',
  },
  {
    slug: 'flooring',
    title: 'Flooring',
    num: '05',
    tag: 'Interior',
    desc: 'Hardwood, LVP, porcelain, natural stone — precision installation.',
    time: '1–2 wks',
    from: 'per sq ft',
    span: 2,
    img: '/images/flooring.jpg',
  },
  {
    slug: 'roofing',
    title: 'Exterior & Roofing',
    num: '06',
    tag: 'Exterior',
    desc: 'Roof replacement, leak repair, gutters, fascia, and siding.',
    time: '1–2 weeks',
    from: 'quote on scope',
    span: 3,
    img: '/images/roofing.jpg',
  },
  {
    slug: 'deck-outdoor',
    title: 'Decks & Outdoor',
    num: '07',
    tag: 'Exterior',
    desc: 'Custom wood and composite decks, pergolas, and railings for Long Island weather.',
    time: '2–4 wks',
    from: 'quote on scope',
    span: 3,
    img: '/images/deck.jpg',
  },
  {
    slug: 'painting',
    title: 'Interior & Exterior Painting',
    num: '08',
    tag: 'Finish work',
    desc: 'Proper prep, caulking, and premium products. The small moves that make a house feel finished.',
    time: 'Varies',
    from: 'project-based',
    span: 3,
    img: '/images/painting.jpg',
  },
  {
    slug: 'doors-windows',
    title: 'Doors & Windows',
    num: '09',
    tag: 'Exterior · Energy',
    desc: 'Energy-efficient replacements for comfort, curb appeal, and lower bills.',
    time: '1–3 days',
    from: 'quote on scope',
    span: 3,
    img: '/images/living-room.jpg',
  },
];

export function ServicesListPage() {
  return (
    <>
      <Helmet>
        <title>Home Improvement Services | LC Quality Improvements</title>
        <meta
          name='description'
          content='Full-service home improvement contractor in Centereach, NY. Kitchens, bathrooms, decks, roofing, flooring, and more across Long Island.'
        />
      </Helmet>

      {/* PAGE HEADER */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0 60px',
          borderBottom: '1px solid var(--color-line)',
          overflow: 'hidden',
          isolation: 'isolate',
        }}
      >
        {/* bg photo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            backgroundImage: 'url(/images/kitchen.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            filter: 'saturate(0.7) brightness(0.35)',
          }}
        />
        {/* gradient veil */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            background:
              'linear-gradient(90deg, rgba(11,16,24,0.92) 40%, rgba(11,16,24,0.5) 100%)',
          }}
        />
        <div className='wrap'>
          <div className='sec-num'>Services</div>
          <h1
            style={{
              fontFamily: "'Newsreader', serif",
              fontWeight: 400,
              fontSize: 'clamp(32px, 4.5vw, 58px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-ink)',
              maxWidth: 620,
              marginTop: 12,
              marginBottom: 0,
            }}
          >
            Every service,
            <br />
            under{' '}
            <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
              one roof
            </em>
            .
          </h1>
          <p
            className='lead'
            style={{
              maxWidth: 500,
              marginTop: 18,
              color: 'var(--color-ink-2)',
            }}
          >
            Owner-operated means Luis is on every job site. From demo day to
            final punch list — you deal with one person, not a dispatcher.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        style={{ background: 'var(--color-bg)', padding: '72px 0 96px' }}
      >
        <div className='wrap'>
          <div className='services-grid'>
            {allServices.map((s) => {
              const classes = [
                'scard',
                s.span === 3 ? 'span-3' : s.span === 2 ? 'span-2' : '',
                s.tall ? 'tall' : '',
                s.accent ? 'accent-card' : '',
                s.dark ? 'dark' : '',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={classes}
                >
                  {s.img && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: -1,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                      }}
                    >
                      <img
                        src={s.img}
                        alt=''
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.18,
                          filter: 'saturate(0.7) contrast(1.1)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to bottom, rgba(20,27,40,0.45) 0%, rgba(20,27,40,0.88) 100%)',
                        }}
                      />
                    </div>
                  )}
                  <div>
                    <div className='s-num'>
                      {s.num} &nbsp;·&nbsp; {s.tag}
                    </div>
                    <h3 className='s-title'>{s.title}</h3>
                    <p className='s-desc'>{s.desc}</p>
                  </div>
                  <div className='s-foot'>
                    <div className='s-meta'>
                      <b>{s.time}</b>
                      <span>{s.from}</span>
                    </div>
                    <span className='s-more'>
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.6'
                      >
                        <path d='M2 7h10M7 2l5 5-5 5' />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title='Not sure what you need?'
        titleEm="Let's talk it through."
        subtitle="Free in-home walk-through. We'll tell you what it takes — and what it costs."
        primaryLabel='Book a Walk-Through'
      />
    </>
  );
}
