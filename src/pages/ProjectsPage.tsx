import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { BeforeAfterSlider } from '../components/sections/BeforeAfterSlider';
import { CtaBand } from '../components/sections/CtaBand';

const projects = [
  {
    beforeSrc: '/images/kitchen.jpg',
    afterSrc: '/images/kitchen.jpg',
    title: 'Kitchen Renovation — Stony Brook',
    description: 'New cabinets, quartz counters & recessed lighting',
  },
  {
    beforeSrc: '/images/bathroom.jpg',
    afterSrc: '/images/bathroom.jpg',
    title: 'Master Bathroom — Smithtown',
    description: 'Walk-in shower, heated floors & custom tile',
  },
  {
    beforeSrc: '/images/deck.png',
    afterSrc: '/images/deck.png',
    title: 'Composite Deck — Commack',
    description: 'Multi-level deck with built-in bench & pergola',
  },
  {
    beforeSrc: '/images/living-room.jpg',
    afterSrc: '/images/living-room.jpg',
    title: 'Living Room Flooring — Hauppauge',
    description: 'Luxury vinyl plank installation, full first floor',
  },
  {
    beforeSrc: '/images/basement.jpg',
    afterSrc: '/images/basement.jpg',
    title: 'Basement Finish — Ronkonkoma',
    description: 'Full build-out with home office & recessed lighting',
  },
  {
    beforeSrc: '/images/exterior-painting.jpg',
    afterSrc: '/images/exterior-painting.jpg',
    title: 'Exterior Painting — Centereach',
    description: 'Full exterior repaint, trim & shutters',
  },
];

export function ProjectsPage() {
  const fadeRef = useFadeIn();

  return (
    <div ref={fadeRef}>
      <Helmet>
        <title>Our Projects | LC Quality Improvements</title>
        <meta
          name='description'
          content='See before & after transformations from real Long Island homes — kitchens, bathrooms, decks and more by LC Quality Improvements.'
        />
      </Helmet>

      {/* HERO */}
      <section
        className='relative pt-[68px] py-20 px-[6%] text-center overflow-hidden'
        style={{
          background:
            'linear-gradient(160deg, #060F1E 0%, #0C2040 55%, #091830 100%)',
        }}
      >
        <div
          className='absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse, rgba(0,176,255,0.09) 0%, transparent 70%)',
          }}
        />
        <div className='relative z-10 max-w-[700px] mx-auto'>
          <div className='inline-flex items-center gap-3 mb-4 fi'>
            <span
              className='w-8 h-px'
              style={{
                background: 'linear-gradient(to right, transparent, #00B0FF)',
              }}
            />
            <span className='text-ice text-[0.72rem] font-extrabold tracking-[2.5px] uppercase'>
              Real Results
            </span>
            <span
              className='w-8 h-px'
              style={{
                background: 'linear-gradient(to left, transparent, #00B0FF)',
              }}
            />
          </div>
          <h1 className='text-[clamp(2rem,5vw,3.4rem)] font-black text-white tracking-[-1.5px] leading-[1.1] mb-4 fi'>
            Before &amp; After{' '}
            <em className='not-italic text-ice'>Transformations</em>
          </h1>
          <p className='text-muted text-[0.97rem] leading-[1.75] max-w-[520px] mx-auto fi'>
            Drag the slider on each photo to see the difference. Real Long
            Island homes, real results.
          </p>
          <div className='flex justify-center gap-6 mt-7 fi'>
            {[
              { icon: 'hammer', text: '500+ Projects Done' },
              { icon: 'star', text: '5.0 Google Rating' },
              { icon: 'map-marker-alt', text: 'All of Long Island' },
            ].map((stat) => (
              <div
                key={stat.text}
                className='flex items-center gap-2 text-[0.85rem] font-bold text-text'
              >
                <i className={`fas fa-${stat.icon} text-ice`} /> {stat.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER GRID */}
      <section className='relative py-20 px-[6%] bg-navy2 overflow-hidden'>
        <div
          className='absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse, rgba(21,101,192,0.07) 0%, transparent 70%)',
          }}
        />
        <div className='max-w-[1180px] mx-auto relative z-10'>
          <div className='text-center mb-11 fi'>
            <div className='inline-flex items-center gap-3 mb-3'>
              <span
                className='w-8 h-px'
                style={{
                  background: 'linear-gradient(to right, transparent, #00B0FF)',
                }}
              />
              <span className='text-ice text-[0.72rem] font-extrabold tracking-[2.5px] uppercase'>
                Portfolio
              </span>
              <span
                className='w-8 h-px'
                style={{
                  background: 'linear-gradient(to left, transparent, #00B0FF)',
                }}
              />
            </div>
            <h2 className='text-[clamp(1.6rem,3.2vw,2.4rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              Recent Work — Long Island Homes
            </h2>
            <p className='text-muted text-[0.93rem] leading-[1.75] max-w-[500px] mx-auto'>
              Drag the slider on each photo to see the before and after
              difference.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-[1.4rem] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1'>
            {projects.map((p, i) => (
              <div
                key={i}
                className='fi'
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <BeforeAfterSlider
                  beforeSrc={p.beforeSrc}
                  afterSrc={p.afterSrc}
                  title={p.title}
                  description={p.description}
                />
              </div>
            ))}
          </div>
          <div className='mt-12 text-center fi'>
            <p className='text-muted text-[0.9rem] mb-5'>
              Ready to transform your own home?
            </p>
            <Link to='/contact' className='btn-grad'>
              <i className='fas fa-clipboard-check' /> Start With a Free
              Estimate
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
