import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { AreasSection } from '../components/sections/AreasSection';
import { CtaBand } from '../components/sections/CtaBand';

const stats = [
  { icon: 'map-marker-alt', value: '20+', label: 'Towns Served' },
  { icon: 'hammer', value: '500+', label: 'Projects Completed' },
  { icon: 'road', value: '0', label: 'Travel Surcharge' },
  { icon: 'clock', value: '24hr', label: 'Response Time' },
];

const coverageBenefits = [
  {
    icon: 'truck',
    title: 'No Travel Fees — Ever',
    desc: "Whether you're in Centereach or Huntington, we never add a travel surcharge. Our price is your price regardless of location.",
  },
  {
    icon: 'users',
    title: 'Local Crew, Local Knowledge',
    desc: "Our team knows Long Island's zoning rules, building codes, and permit requirements in each town — no learning curve on your project.",
  },
  {
    icon: 'calendar-check',
    title: 'Same-Week Scheduling',
    desc: 'For most of Nassau and Suffolk County, we can schedule a free estimate within the same week. No long waiting lists.',
  },
  {
    icon: 'phone-volume',
    title: 'Always Reachable',
    desc: "Call or text anytime Mon–Sat from 7 AM to 7 PM. You'll speak to a real person from our local team — not an answering service.",
  },
  {
    icon: 'shield-halved',
    title: 'NYS Licensed & Insured',
    desc: "Fully licensed by New York State and carrying full liability insurance. You're protected on every job, in every town we serve.",
  },
  {
    icon: 'file-signature',
    title: 'Written Contracts & Warranties',
    desc: 'Every project gets a written contract with scope, timeline, and pricing locked in. Plus a written labor and materials warranty.',
  },
];

const townHighlights = [
  { name: 'Centereach', note: 'Our home base', icon: 'home' },
  { name: 'Smithtown', note: 'Kitchen & bath specialists', icon: 'utensils' },
  { name: 'Commack', note: 'Deck & outdoor experts', icon: 'tree' },
  { name: 'Hauppauge', note: 'Basement finishing hub', icon: 'couch' },
  { name: 'Stony Brook', note: 'Full gut remodels', icon: 'hammer' },
  { name: 'Huntington', note: 'Interior & exterior', icon: 'paint-roller' },
  { name: 'Ronkonkoma', note: 'Roofing & electrical', icon: 'bolt' },
  { name: 'Port Jefferson', note: 'Flooring & tile', icon: 'th-large' },
];

export function AreasPage() {
  const fadeRef = useFadeIn();

  return (
    <div ref={fadeRef}>
      <Helmet>
        <title>Service Areas | LC Quality Improvements</title>
        <meta
          name='description'
          content='LC Quality Improvements serves Centereach, Selden, Smithtown, Commack, Ronkonkoma, Hauppauge, Stony Brook and all of Long Island, NY.'
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
          className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse, rgba(21,101,192,0.14) 0%, transparent 70%)',
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
              Where We Work
            </span>
            <span
              className='w-8 h-px'
              style={{
                background: 'linear-gradient(to left, transparent, #00B0FF)',
              }}
            />
          </div>
          <h1 className='text-[clamp(2rem,5vw,3.4rem)] font-black text-white tracking-[-1.5px] leading-[1.1] mb-4 fi'>
            Serving All of <em className='not-italic text-ice'>Long Island</em>
          </h1>
          <p className='text-muted text-[0.97rem] leading-[1.75] max-w-[520px] mx-auto fi'>
            Based in Centereach, NY — we serve Nassau &amp; Suffolk County
            homeowners from Freeport to Riverhead. No travel fees, ever.
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

      {/* STATS STRIP */}
      <div className='bg-navy2 py-8 px-[6%] border-b border-gline'>
        <div className='max-w-[1160px] mx-auto grid grid-cols-4 gap-5 max-[700px]:grid-cols-2 fi'>
          {stats.map((s) => (
            <div
              key={s.label}
              className='flex flex-col items-center gap-2 text-center'
            >
              <div
                className='w-10 h-10 rounded-full flex items-center justify-center'
                style={{
                  background: 'rgba(0,176,255,0.1)',
                  border: '1px solid rgba(0,176,255,0.25)',
                }}
              >
                <i className={`fas fa-${s.icon} text-ice text-sm`} />
              </div>
              <div className='text-[1.75rem] font-black text-ice leading-none'>
                {s.value}
              </div>
              <div className='text-[0.76rem] font-bold text-muted uppercase tracking-wider'>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAP + AREA PILLS */}
      <AreasSection />

      {/* TOWN HIGHLIGHTS */}
      <section className='py-20 px-[6%] bg-navy'>
        <div className='max-w-[1160px] mx-auto'>
          <div className='text-center mb-11 fi'>
            <div className='inline-flex items-center gap-3 mb-3'>
              <span
                className='w-8 h-px'
                style={{
                  background: 'linear-gradient(to right, transparent, #00B0FF)',
                }}
              />
              <span className='text-ice text-[0.72rem] font-extrabold tracking-[2.5px] uppercase'>
                Popular Towns
              </span>
              <span
                className='w-8 h-px'
                style={{
                  background: 'linear-gradient(to left, transparent, #00B0FF)',
                }}
              />
            </div>
            <h2 className='text-[clamp(1.6rem,3.2vw,2.4rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              Where Long Island Homeowners Call Us
            </h2>
            <p className='text-muted text-[0.93rem] leading-[1.75] max-w-[500px] mx-auto'>
              Most of our projects come from these communities. Click any town
              to get in touch.
            </p>
          </div>
          <div className='grid grid-cols-4 gap-4 max-[880px]:grid-cols-2 max-[480px]:grid-cols-1'>
            {townHighlights.map((t, i) => (
              <Link
                key={t.name}
                to='/contact'
                className='group relative bg-[rgba(255,255,255,0.04)] border border-gline rounded-[20px] p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,176,255,0.4)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] fi cursor-pointer'
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div
                  className='absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                  style={{
                    background:
                      'radial-gradient(ellipse at 0% 0%, rgba(0,176,255,0.05), transparent 65%)',
                  }}
                />
                <div
                  className='w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:border-ice group-hover:shadow-[0_0_14px_rgba(0,176,255,0.3)]'
                  style={{
                    borderColor: 'rgba(0,176,255,0.3)',
                    background: 'rgba(0,176,255,0.07)',
                  }}
                >
                  <i className={`fas fa-${t.icon} text-ice text-sm`} />
                </div>
                <div className='relative z-10'>
                  <h3 className='text-[1rem] font-black text-white mb-1 transition-colors duration-200 group-hover:text-ice'>
                    {t.name}
                  </h3>
                  <p className='text-[0.76rem] text-muted'>{t.note}</p>
                </div>
                <div className='text-[0.72rem] font-bold text-ice flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                  Get an estimate{' '}
                  <i className='fas fa-arrow-right text-[0.58rem]' />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE SERVE ALL OF LI */}
      <section className='py-20 px-[6%] bg-navy2'>
        <div className='max-w-[1160px] mx-auto'>
          <div className='text-center mb-11 fi'>
            <div className='inline-flex items-center gap-3 mb-3'>
              <span
                className='w-8 h-px'
                style={{
                  background: 'linear-gradient(to right, transparent, #00B0FF)',
                }}
              />
              <span className='text-ice text-[0.72rem] font-extrabold tracking-[2.5px] uppercase'>
                Why Choose Us
              </span>
              <span
                className='w-8 h-px'
                style={{
                  background: 'linear-gradient(to left, transparent, #00B0FF)',
                }}
              />
            </div>
            <h2 className='text-[clamp(1.6rem,3.2vw,2.4rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              What You Get No Matter Where You Are
            </h2>
            <p className='text-muted text-[0.93rem] leading-[1.75] max-w-[500px] mx-auto'>
              Same quality, same crew, same commitment — whether you're in
              Centereach or Huntington.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1'>
            {coverageBenefits.map((b, i) => (
              <div
                key={b.title}
                className='group relative bg-[rgba(255,255,255,0.04)] border border-gline rounded-[22px] p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,176,255,0.4)] fi'
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className='absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                  style={{
                    background:
                      'radial-gradient(ellipse at 0% 0%, rgba(0,176,255,0.06), transparent 60%)',
                  }}
                />
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:border-ice group-hover:shadow-[0_0_16px_rgba(0,176,255,0.28)] shrink-0'
                  style={{
                    borderColor: 'rgba(0,176,255,0.28)',
                    background: 'rgba(0,176,255,0.07)',
                  }}
                >
                  <i className={`fas fa-${b.icon} text-ice text-[1rem]`} />
                </div>
                <div className='relative z-10'>
                  <h3 className='text-[1rem] font-black text-white mb-2 leading-snug transition-colors duration-200 group-hover:text-ice'>
                    {b.title}
                  </h3>
                  <p className='text-[0.82rem] text-muted leading-[1.65]'>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SEO paragraph */}
          <div
            className='mt-10 p-6 rounded-[22px] border border-gline fi'
            style={{
              background:
                'linear-gradient(135deg, rgba(21,101,192,0.1), rgba(0,176,255,0.05))',
            }}
          >
            <p className='text-[0.84rem] text-muted leading-[1.85]'>
              <strong className='text-text'>LC Quality Improvements</strong> is
              a fully licensed and insured home improvement contractor based in{' '}
              <strong className='text-text'>Centereach, NY 11720</strong>. We
              serve the entire{' '}
              <strong className='text-text'>Long Island</strong> area including
              Nassau County towns such as Hempstead, Freeport, Garden City,
              Mineola, Valley Stream, and Uniondale, as well as Suffolk County
              communities including Babylon, Brentwood, Central Islip, Deer
              Park, Bay Shore, Islip, Bohemia, Holbrook, Holtsville, Medford,
              Patchogue, Riverhead, Southampton, and East Hampton. All work is
              performed by our in-house licensed crew — no subcontracting, no
              markups, no surprises.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
