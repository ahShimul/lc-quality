import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AreasSection } from '../components/sections/AreasSection';
import { CtaBand } from '../components/sections/CtaBand';

const reviews = [
  {
    text: 'Luis is professional, punctual, knowledgeable — his prices and the quality of his work are second to none. He keeps you informed on every detail.',
    name: 'Repeat Client',
    loc: 'Kitchen + Bath · Stony Brook',
  },
  {
    text: 'Came to replace a floor joist and a kitchen header. Demo, install, sheetrock, spackle, paint — three visits and done. Already booking the next project.',
    name: 'Michelle B.',
    loc: 'Framing · Centereach',
  },
  {
    text: 'Amazing quality work, very affordable, meticulous. We will be looking forward to the next project with LC.',
    name: 'Christine O.',
    loc: 'Plumbing · Port Jefferson',
  },
];

const faqItems = [
  {
    q: 'Do you handle permits and inspections?',
    a: "Yes — for any job that requires one. We pull the permit under our license, coordinate Town of Brookhaven (or your town) inspections, and hand you a closed permit at the end.",
  },
  {
    q: 'What areas do you serve?',
    a: "All of Suffolk County and most of Nassau. If you're west of Huntington we'll still come out for additions and larger kitchen remodels.",
  },
  {
    q: 'How do estimates work?',
    a: 'Free, in-home, about an hour. We measure the space, talk through what you want, and send a written line-itemed quote within 48 hours. No pressure, no deposit to see the number.',
  },
  {
    q: 'Are you licensed and insured?',
    a: "Licensed in Suffolk County (HIC license on request), fully insured with general liability and workers' comp. We'll provide current COIs before any hammer swings.",
  },
  {
    q: 'Do you use subcontractors?',
    a: 'Occasionally for plumbing and electrical rough-ins, but only trusted tradespeople we\'ve worked with for years. Luis remains on-site and accountable for every aspect of your project.',
  },
];

const galleryItems = [
  { cat: 'kitchen', code: 'K-014', title: 'Stony Brook kitchen', meta: 'White oak · Quartz', img: '/images/kitchen-after.jpg', col: 7, ratio: '16/10' },
  { cat: 'basement', code: 'BA-009', title: 'Centereach basement', meta: 'Egress · wet bar', img: '/images/basement.jpg', col: 5, ratio: '4/5' },
  { cat: 'bath', code: 'B-022', title: 'Port Jeff primary bath', meta: 'Porcelain slab', img: '/images/bathroom-after.jpg', col: 4, ratio: '1/1' },
  { cat: 'floor', code: 'F-031', title: 'Ronkonkoma floors', meta: 'Red oak · site-finished', img: '/images/flooring.jpg', col: 4, ratio: '1/1' },
  { cat: 'kitchen', code: 'K-018', title: 'Lake Grove kitchen', meta: 'Shaker · butcher block', img: '/images/kitchen.jpg', col: 4, ratio: '1/1' },
  { cat: 'bath', code: 'B-025', title: 'Selden guest bath', meta: 'Tile · matte brass', img: '/images/bathroom.jpg', col: 5, ratio: '4/5' },
  { cat: 'deck', code: 'D-007', title: 'Commack deck', meta: 'Composite · multi-level', img: '/images/deck-after.jpg', col: 7, ratio: '16/10' },
];

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [budget, setBudget] = useState(40);
  const [submitted, setSubmitted] = useState(false);
  const [scope, setScope] = useState<string[]>([]);

  const filtered = activeFilter === 'all' ? galleryItems : galleryItems.filter((g) => g.cat === activeFilter);

  const toggleScope = (val: string) =>
    setScope((prev) => prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]);

  const fmt = (v: number) => v >= 200 ? '$200k+' : `$${v}k`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>LC Quality Improvements — General Contractor, Long Island NY</title>
        <meta name="description" content="Owner-operated general contractor in Centereach, NY. Kitchens, bathrooms, additions, basements, flooring & more across Suffolk County." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="hero" style={{ paddingTop: '104px' }}>
        <div className="hero-bg" aria-hidden="true">
          <div className="photo" style={{ backgroundImage: "url('/images/kitchen.jpg')" }} />
          <div className="veil" />
          <svg className="grid-lines" viewBox="0 0 1600 900" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', stroke: 'rgba(110,168,255,.06)', strokeWidth: 1, fill: 'none' }}>
            <g>
              <path d="M0 150 L1600 150"/><path d="M0 300 L1600 300"/><path d="M0 450 L1600 450"/>
              <path d="M0 600 L1600 600"/><path d="M0 750 L1600 750"/>
              <path d="M200 0 L200 900"/><path d="M400 0 L400 900"/><path d="M600 0 L600 900"/>
              <path d="M800 0 L800 900"/><path d="M1000 0 L1000 900"/><path d="M1200 0 L1200 900"/>
              <path d="M1400 0 L1400 900"/>
            </g>
          </svg>
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="hero-marquee top">Built on Long Island &nbsp;·&nbsp; Built on Long Island &nbsp;·&nbsp; Built on Long Island &nbsp;·&nbsp;</div>
          <div className="hero-marquee bot">Quality Improvements &nbsp;·&nbsp; Quality Improvements &nbsp;·&nbsp; Quality Improvements &nbsp;·&nbsp;</div>
        </div>

        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow" style={{ color: 'var(--color-accent)' }}>⬡ &nbsp;General Contractor · Long Island, NY</div>
              <h1 className="h-display" style={{ marginTop: 16 }}>
                Homes built<br />
                with a <em>craftsman's</em><br />
                patience.
              </h1>
            </div>
            <div className="hero-card">
              <div>
                <div className="eyebrow" style={{ marginBottom: 6 }}>Currently booking</div>
                <h3>Spring &amp; Summer 2026 projects</h3>
              </div>
              <div>
                <div className="row"><span>Kitchen remodels</span><b>3 wk lead</b></div>
                <div className="row"><span>Bathroom renovations</span><b>2 wk lead</b></div>
                <div className="row"><span>Additions &amp; framing</span><b>6 wk lead</b></div>
                <div className="row"><span>Basement build-outs</span><b>4 wk lead</b></div>
              </div>
              <Link to="/contact" className="btn-primary">
                <span>Request a free estimate</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="hero-meta">
            <div><div className="mono">Owner / Lead</div>Luis Curillo</div>
            <div><div className="mono">Service area</div>Suffolk &amp; Nassau County</div>
            <div><div className="mono">Specialty</div>Additions &amp; Kitchen Remodels</div>
            <div><div className="mono">Since</div>2014 · 120+ homes</div>
          </div>

          <div className="hero-strip">
            <div className="shot">
              <img src="/images/kitchen-after.jpg" alt="Kitchen renovation" />
              <div className="tag"><span className="idx">01</span><span>kitchen · oak + quartz</span></div>
            </div>
            <div className="shot">
              <img src="/images/bathroom-after.jpg" alt="Bathroom renovation" />
              <div className="tag"><span className="idx">02</span><span>bath · walk-in shower</span></div>
            </div>
            <div className="shot">
              <img src="/images/deck-after.jpg" alt="Deck project" />
              <div className="tag"><span className="idx">03</span><span>deck · composite</span></div>
            </div>
            <div className="shot">
              <img src="/images/basement.jpg" alt="Basement finishing" />
              <div className="tag"><span className="idx">04</span><span>basement · legal egress</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: 'var(--color-bg)', padding: '96px 0', borderTop: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="sec-num">001 / Services</div>
              <h2 className="h-section">A full-service shop<br />for <em>every room</em> in the house.</h2>
            </div>
            <div className="lead">
              <p>LC is owner-operated. Luis runs every job on site, from first demo to the final trim — so the person who scoped it is the person holding the level.</p>
            </div>
          </div>

          <div className="services-grid reveal">
            <Link to="/services/kitchen-remodeling" className="scard span-3 tall accent-card">
              <div>
                <div className="s-num">01 &nbsp;·&nbsp; Signature</div>
                <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="14" width="40" height="26"/><rect x="4" y="22" width="40" height="4" fill="currentColor" opacity=".18"/>
                  <path d="M4 14 L24 4 L44 14"/><path d="M14 40 V28 M24 40 V28 M34 40 V28"/>
                </svg>
                <h3 className="s-title">Kitchen <em>Remodels</em></h3>
                <p className="s-desc">Our most requested work. Cabinets, stone counters, tile, headers, lighting, electrical — scoped and delivered turnkey by a single small crew.</p>
              </div>
              <div className="s-foot">
                <div className="s-meta"><b>3–6 weeks</b><span>from $28k</span></div>
                <span className="s-more">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 7h10M7 2l5 5-5 5"/></svg>
                </span>
              </div>
              <svg className="s-pattern" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth=".5">
                <circle cx="50" cy="50" r="48"/><circle cx="50" cy="50" r="36"/><circle cx="50" cy="50" r="24"/><circle cx="50" cy="50" r="12"/>
              </svg>
            </Link>

            <Link to="/services/bathroom-renovation" className="scard span-3 tall">
              <div>
                <div className="s-num">02 &nbsp;·&nbsp; Signature</div>
                <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="6" y="10" width="36" height="28" rx="2"/>
                  <path d="M12 22 Q18 18 24 22 T36 22"/>
                  <circle cx="14" cy="32" r="1.5" fill="currentColor"/>
                  <circle cx="34" cy="32" r="1.5" fill="currentColor"/>
                </svg>
                <h3 className="s-title">Bathroom <em>Renovations</em></h3>
                <p className="s-desc">Custom tile, walk-in showers, vanities, full re-plumbs. Built to last — and to look exactly how you pictured it.</p>
              </div>
              <div className="s-foot">
                <div className="s-meta"><b>2–4 weeks</b><span>from $14k</span></div>
                <span className="s-more">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 7h10M7 2l5 5-5 5"/></svg>
                </span>
              </div>
              <svg className="s-pattern" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth=".5">
                <path d="M10 90 L50 10 L90 90 Z"/><path d="M20 90 L50 30 L80 90"/><path d="M30 90 L50 50 L70 90"/>
              </svg>
            </Link>

            <Link to="/services/basement-finishing" className="scard span-2">
              <div>
                <div className="s-num">03</div>
                <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 16 H44 V40 H4 Z"/><path d="M4 16 L24 4 L44 16"/>
                  <rect x="20" y="22" width="8" height="18"/>
                </svg>
                <h3 className="s-title">Basements</h3>
                <p className="s-desc">Legal egress, framing, insulation, drywall, flooring — full build-outs.</p>
              </div>
              <div className="s-foot"><div className="s-meta"><b>4–8 wks</b><span>from $22k</span></div></div>
            </Link>

            <Link to="/services/flooring" className="scard span-2 dark">
              <div>
                <div className="s-num">04</div>
                <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="8" width="40" height="8"/><rect x="4" y="20" width="40" height="8"/>
                  <rect x="4" y="32" width="40" height="8"/>
                  <path d="M14 8 V16 M26 20 V28 M34 32 V40"/>
                </svg>
                <h3 className="s-title">Flooring</h3>
                <p className="s-desc">Hardwood, LVP, porcelain, natural stone — precision installation.</p>
              </div>
              <div className="s-foot"><div className="s-meta"><b>1–2 wks</b><span>per sq ft</span></div></div>
            </Link>

            <Link to="/services/deck-outdoor" className="scard span-2">
              <div>
                <div className="s-num">05</div>
                <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 20 H44 V40 H4 Z"/><path d="M4 20 L24 8 L44 20"/>
                  <path d="M10 40 V28 M20 40 V28 M30 40 V28 M40 40 V28"/>
                </svg>
                <h3 className="s-title">Decks &amp; Outdoor</h3>
                <p className="s-desc">Custom wood and composite decks, pergolas, and railings for Long Island weather.</p>
              </div>
              <div className="s-foot"><div className="s-meta"><b>2–4 wks</b><span>quote on scope</span></div></div>
            </Link>

            <Link to="/services/roofing" className="scard span-3">
              <div>
                <div className="s-num">06 &nbsp;·&nbsp; Exterior</div>
                <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 24 L24 4 L44 24"/><path d="M8 24 V44 H40 V24"/>
                  <rect x="18" y="28" width="12" height="16"/>
                  <path d="M4 24 H8 M40 24 H44"/>
                </svg>
                <h3 className="s-title">Exterior &amp; <em>Roofing</em></h3>
                <p className="s-desc">Roof replacement, leak repair, gutters, fascia, and siding. Everything that keeps your home protected from the outside in.</p>
              </div>
              <div className="s-foot"><div className="s-meta"><b>1–2 weeks</b><span>quote on scope</span></div></div>
            </Link>

            <Link to="/services/painting" className="scard span-3">
              <div>
                <div className="s-num">07 &nbsp;·&nbsp; Finish work</div>
                <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="6" y="6" width="36" height="36"/>
                  <path d="M6 6 L42 42 M42 6 L6 42" opacity=".3"/>
                  <circle cx="24" cy="24" r="8"/>
                </svg>
                <h3 className="s-title">Interior &amp; Exterior <em>Painting</em></h3>
                <p className="s-desc">Proper prep, caulking, and premium products. The small moves that make a house feel finished.</p>
              </div>
              <div className="s-foot"><div className="s-meta"><b>Varies</b><span>project-based</span></div></div>
            </Link>
          </div>

          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link to="/services" className="btn-ghost">View all services →</Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ background: 'var(--color-bg-2)', padding: '96px 0', borderTop: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="sec-num">002 / Process</div>
              <h2 className="h-section">Four steps.<br />No <em>surprises</em>.</h2>
            </div>
            <div className="lead">
              <p>Most homeowners we meet have been burned by a contractor before. Our process is built to be the opposite of that — transparent quotes, weekly site walks, written change orders.</p>
            </div>
          </div>

          <div className="process-grid reveal">
            {[
              { n: 'i.', title: 'Walk-through', desc: 'We visit the home, measure, listen, and write up the scope together. Usually an hour.', note: 'Free · 60 min' },
              { n: 'ii.', title: 'Written quote', desc: 'Line-itemed estimate within 48 hours. Labor and materials separate. No vague "allowances".', note: 'Within 48 hrs' },
              { n: 'iii.', title: 'Build', desc: 'Daily site protection, end-of-week photo update, written change orders if anything shifts.', note: '2–14 wks' },
              { n: 'iv.', title: 'Walk & warrant', desc: 'Final punch list walk together. One-year workmanship warranty on everything we touch.', note: '1-yr warranty' },
            ].map((s) => (
              <div key={s.n} className="step">
                <div>
                  <div className="step-n">{s.n}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
                <div className="mono" style={{ fontSize: '10.5px', letterSpacing: '.1em', color: 'var(--color-muted)', textTransform: 'uppercase' }}>{s.note}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link to="/process" className="btn-ghost">See our full process →</Link>
          </div>
        </div>
      </section>

      {/* ── WORK / GALLERY ── */}
      <section id="work" style={{ background: 'var(--color-bg)', padding: '96px 0', borderTop: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="sec-num">003 / Selected Work</div>
              <h2 className="h-section">Recent projects,<br /><em>honest</em> documentation.</h2>
            </div>
            <div className="lead">
              <p>A small slice of the last two years. Filter by category — every project is a real home on Long Island, photographed after final walk-through.</p>
            </div>
          </div>

          <div className="filter-bar reveal" role="tablist">
            {[
              { val: 'all', label: 'All work' },
              { val: 'kitchen', label: 'Kitchens' },
              { val: 'bath', label: 'Bathrooms' },
              { val: 'deck', label: 'Decks' },
              { val: 'basement', label: 'Basements' },
              { val: 'floor', label: 'Flooring' },
            ].map((f) => (
              <button key={f.val} className={`chip${activeFilter === f.val ? ' active' : ''}`} onClick={() => setActiveFilter(f.val)}>
                {f.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid reveal">
            {filtered.map((item) => (
              <div key={item.code} className="g-item" style={{ gridColumn: `span ${item.col}`, aspectRatio: item.ratio }}>
                <img src={item.img} alt={item.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="g-corner mono">{item.code}</div>
                <div className="g-info">
                  <span className="serif" style={{ fontSize: 18, color: '#fff', fontStyle: 'italic' }}>{item.title}</span>
                  <span className="mono" style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '.08em', opacity: .8, color: '#fff' }}>{item.meta}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link to="/projects" className="btn-ghost">Browse all projects →</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: 'var(--color-bg-2)', padding: '96px 0', borderTop: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="sec-num">004 / About</div>
              <h2 className="h-section">One name.<br />One <em>phone</em>.</h2>
            </div>
            <div className="lead">
              <p>LC Quality Improvements is a locally-owned, owner-operated general contractor based in Centereach. No middlemen, no rotating crews — you work directly with Luis for the length of the project.</p>
            </div>
          </div>

          <div className="about-grid reveal">
            <div className="portrait">
              <img src="/images/kitchen.jpg" alt="LC Quality work" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.8) brightness(.85)' }} />
              <div className="p-caption">
                <span>LC Quality Improvements — Centereach, NY</span>
                <span>Est. 2014</span>
              </div>
            </div>
            <div>
              <p className="pullquote">"We treat your home like it's <em>our own</em>. Plastic on the floors every day, vacuum before we leave, and a straight answer to every question."</p>
              <p style={{ fontSize: 15 }}>Luis has been building on Long Island since 2014. LC started as weekend kitchen jobs, grew through word-of-mouth, and now runs a small bench of trusted sub-trades — plumbers, electricians, tile setters — he's worked with for a decade. The company is intentionally small so that the quality stays high and the owner is still on every job site.</p>
              <div className="stats-row">
                <div className="stat-item"><div className="stat-num"><em>120</em>+</div><div className="stat-lbl">Homes served</div></div>
                <div className="stat-item"><div className="stat-num"><em>11</em> yr</div><div className="stat-lbl">On the Island</div></div>
                <div className="stat-item"><div className="stat-num"><em>100</em>%</div><div className="stat-lbl">Recommend rate</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" style={{ background: 'var(--color-bg)', padding: '96px 0', borderTop: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="sec-num">005 / What clients say</div>
              <h2 className="h-section">Reviews, in<br />their <em>own words</em>.</h2>
            </div>
            <div className="lead">
              <p>Every project ends with a walk-through and an honest ask for feedback. Here's a representative sampling from Angi, HomeAdvisor and direct referrals.</p>
            </div>
          </div>

          <div className="reviews-grid reveal">
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="r-stars">★★★★★</div>
                <blockquote>{r.text}</blockquote>
                <div className="r-who"><b>{r.name}</b><span>{r.loc}</span></div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link to="/reviews" className="btn-ghost">Read all reviews →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: 'var(--color-bg-2)', padding: '96px 0', borderTop: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="sec-num">006 / Answers</div>
              <h2 className="h-section">Frequently asked,<br />plainly <em>answered</em>.</h2>
            </div>
            <div className="lead">
              <p>The questions we hear on most first-visit walk-throughs.</p>
            </div>
          </div>

          <div className="reveal" style={{ maxWidth: 780 }}>
            {faqItems.map((item, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="faq-plus">+</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESTIMATE / CTA ── */}
      <section id="estimate" style={{ background: '#05090f', padding: '96px 0', borderTop: '1px solid var(--color-line)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(600px 400px at 80% 20%, rgba(110,168,255,.15), transparent 60%)', pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="sec-head">
            <div>
              <div className="sec-num">007 / Get in touch</div>
              <h2 className="h-section">Tell us about<br />the <em>project</em>.</h2>
            </div>
            <div className="lead">
              <p>We'll get back to you within one business day to set up a free in-home walk-through.</p>
            </div>
          </div>

          {submitted ? (
            <div className="form-success show">
              Thanks — we'll be in touch within one business day to set up the walk-through. —Luis
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-col">
                  <div className="field">
                    <label>01 · Your name</label>
                    <input name="name" placeholder="Jane Homeowner" required />
                  </div>
                  <div className="field">
                    <label>02 · Email</label>
                    <input name="email" type="email" placeholder="jane@email.com" required />
                  </div>
                  <div className="field">
                    <label>03 · Phone</label>
                    <input name="phone" type="tel" placeholder="(631) 555-0123" required />
                  </div>
                  <div className="field">
                    <label>04 · Town</label>
                    <input name="town" placeholder="Centereach, NY" required />
                  </div>
                </div>
                <div className="form-col">
                  <div className="field">
                    <label>05 · Scope (select all that apply)</label>
                    <div className="chips-multi">
                      {['Kitchen', 'Bathroom', 'Addition', 'Basement', 'Flooring', 'Other'].map((s) => (
                        <span key={s} className={`pill${scope.includes(s) ? ' on' : ''}`} onClick={() => toggleScope(s)}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label>06 · Rough budget</label>
                    <input type="range" style={{ width: '100%' }} min="5" max="200" step="5" value={budget} onChange={(e) => setBudget(+e.target.value)} />
                    <div className="budget-readout">{fmt(budget)}</div>
                  </div>
                  <div className="field">
                    <label>07 · Ideal start</label>
                    <select name="timeline">
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>1–3 months out</option>
                      <option>3–6 months out</option>
                      <option>Just planning for now</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>08 · Anything else</label>
                    <textarea name="message" placeholder="Existing layout, inspiration, timing constraints…" />
                  </div>
                </div>
              </div>
              <div className="form-submit-row">
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.1em', color: 'var(--color-muted)', textTransform: 'uppercase' }}>
                  → Reply within 1 business day
                </div>
                <button className="btn-primary" type="submit">
                  <span>Send request</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <AreasSection />
      <CtaBand title="Ready to Start Your Project?" primaryLabel="Get a Free Estimate" />
    </>
  );
}
