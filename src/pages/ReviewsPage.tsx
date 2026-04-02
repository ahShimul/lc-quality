import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { CtaBand } from '../components/sections/CtaBand';

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
  {
    text: '"The bathroom renovation exceeded every expectation. Beautiful tile work and the project finished on time."',
    name: 'Patricia W.',
    loc: 'Selden, NY',
    init: 'PW',
  },
  {
    text: '"Honest, fair pricing and impeccable work. Our new floors look incredible throughout the entire house."',
    name: 'Robert C.',
    loc: 'Port Jefferson, NY',
    init: 'RC',
  },
  {
    text: '"From the first call to the final walkthrough, the whole team was professional and communicative."',
    name: 'Lisa M.',
    loc: 'Centereach, NY',
    init: 'LM',
  },
];

export function ReviewsPage() {
  const fadeRef = useFadeIn();

  return (
    <div ref={fadeRef}>
      <Helmet>
        <title>Customer Reviews | LC Quality Improvements</title>
        <meta
          name='description'
          content='Over 150 five-star reviews from real Long Island homeowners. See what customers say about LC Quality Improvements.'
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
          className='absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none'
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
              Testimonials
            </span>
            <span
              className='w-8 h-px'
              style={{
                background: 'linear-gradient(to left, transparent, #00B0FF)',
              }}
            />
          </div>
          <h1 className='text-[clamp(2rem,5vw,3.4rem)] font-black text-white tracking-[-1.5px] leading-[1.1] mb-4 fi'>
            Homeowners <em className='not-italic text-ice'>Love the Results</em>
          </h1>
          <p className='text-muted text-[0.97rem] leading-[1.75] max-w-[520px] mx-auto fi'>
            Over 150 five-star reviews from real Long Island homeowners. Here’s
            what they say.
          </p>
          <div className='inline-flex items-center gap-3 mt-6 px-6 py-3 bg-[rgba(255,255,255,0.04)] border border-gline rounded-full fi'>
            <span className='text-[#FFD740] text-lg tracking-widest'>
              ★★★★★
            </span>
            <span className='text-white font-black text-[1.1rem]'>5.0</span>
            <span className='text-muted text-[0.82rem]'>
              · 150+ Google Reviews
            </span>
          </div>
        </div>
      </section>

      {/* MARQUEE — 2 row infinite scroll */}
      <section className='py-20 bg-navy overflow-hidden'>
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
          {/* Row 2 — scrolls right */}
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

        {/* CTA nudge */}
        <div className='text-center mt-14 px-[6%]'>
          <p className='text-muted text-[0.9rem] mb-5'>
            Ready to join 150+ happy Long Island homeowners?
          </p>
          <Link to='/contact' className='btn-grad'>
            <i className='fas fa-clipboard-check' /> Get Your Free Estimate
          </Link>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
