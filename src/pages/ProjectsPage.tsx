import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CtaBand } from '../components/sections/CtaBand';

const projects = [
  { cat: 'kitchen', code: 'K-014', title: 'Stony Brook kitchen', loc: 'Stony Brook, NY', meta: 'White oak cabinets · Quartz countertops · Recessed lighting', before: '/images/kitchen-before.jpg', after: '/images/kitchen-after.jpg', col: 7, ratio: '16/10' },
  { cat: 'bath', code: 'B-022', title: 'Smithtown master bath', loc: 'Smithtown, NY', meta: 'Walk-in shower · Heated floors · Custom tile', before: '/images/bathroom-before.jpg', after: '/images/bathroom-after.jpg', col: 5, ratio: '4/5' },
  { cat: 'deck', code: 'D-007', title: 'Commack composite deck', loc: 'Commack, NY', meta: 'Multi-level deck · Built-in bench · Pergola', before: '/images/deck-before.jpg', after: '/images/deck-after.jpg', col: 6, ratio: '4/3' },
  { cat: 'floor', code: 'F-031', title: 'Hauppauge living room floors', loc: 'Hauppauge, NY', meta: 'LVP · Full first floor', before: '/images/living-room-before.jpg', after: '/images/living-room-after.jpg', col: 6, ratio: '4/3' },
  { cat: 'basement', code: 'BA-009', title: 'Ronkonkoma basement', loc: 'Ronkonkoma, NY', meta: 'Full build-out · Home office · Recessed lighting', before: '/images/basement-before.jpg', after: '/images/basement.jpg', col: 5, ratio: '4/5' },
  { cat: 'exterior', code: 'EP-003', title: 'Exterior painting', loc: 'Port Jefferson, NY', meta: 'Full exterior · Trim · Shutters', before: '/images/exterior-painting-before.jpg', after: '/images/exterior-painting-after.jpg', col: 7, ratio: '16/10' },
];

const filters = [
  { val: 'all', label: 'All work' },
  { val: 'kitchen', label: 'Kitchens' },
  { val: 'bath', label: 'Bathrooms' },
  { val: 'deck', label: 'Decks' },
  { val: 'basement', label: 'Basements' },
  { val: 'floor', label: 'Flooring' },
  { val: 'exterior', label: 'Exterior' },
];

export function ProjectsPage() {
  const [active, setActive] = useState('all');
  const [view, setView] = useState<'after' | 'before'>('after');

  const filtered = active === 'all' ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      <Helmet>
        <title>Projects & Portfolio | LC Quality Improvements</title>
        <meta name="description" content="Before and after photos from real Long Island remodeling projects — kitchens, bathrooms, decks, basements and more." />
      </Helmet>

      {/* PAGE HEADER */}
      <section style={{ background: 'var(--color-bg)', padding: '120px 0 72px', borderBottom: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-num">Portfolio</div>
          <h1 className="h-display" style={{ maxWidth: 720, marginTop: 12 }}>
            Real homes,<br /><em>honest</em> documentation.
          </h1>
          <p style={{ maxWidth: 560, marginTop: 20, fontSize: 16, lineHeight: 1.7, color: 'var(--color-muted)' }}>
            Every project is photographed after the final walk-through. No staging, no render. Filter by category and toggle between before and after.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ background: 'var(--color-bg)', padding: '72px 0 96px' }}>
        <div className="wrap">
          {/* Controls */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 32 }}>
            <div className="filter-bar" role="tablist" style={{ marginBottom: 0, flex: 1, minWidth: 0 }}>
              {filters.map((f) => (
                <button key={f.val} className={`chip${active === f.val ? ' active' : ''}`} onClick={() => setActive(f.val)}>
                  {f.label}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 4, background: 'var(--color-paper)', border: '1px solid var(--color-line)', borderRadius: 8, padding: 3, flexShrink: 0 }}>
              {(['after', 'before'] as const).map((v) => (
                <button key={v} onClick={() => setView(v)} style={{ padding: '6px 14px', borderRadius: 6, fontSize: 12, fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', cursor: 'pointer', border: 'none', background: view === v ? 'var(--color-accent)' : 'transparent', color: view === v ? '#fff' : 'var(--color-muted)', transition: 'all .2s' }}>
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid reveal">
            {filtered.map((p) => (
              <div key={p.code} className="g-item" style={{ gridColumn: `span ${p.col}`, aspectRatio: p.ratio }}>
                <img src={view === 'after' ? p.after : p.before} alt={`${p.title} — ${view}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity .4s' }} />
                <div className="g-corner mono">{p.code}</div>
                <div className="g-info">
                  <span style={{ fontSize: 18, color: '#fff', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{p.title}</span>
                  <span className="mono" style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '.08em', opacity: .8, color: '#fff' }}>{p.meta}</span>
                  <span className="mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', opacity: .65, color: '#fff' }}>{p.loc}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--color-muted)', fontSize: 15, padding: '48px 0' }}>No projects in this category yet — check back soon.</p>
          )}
        </div>
      </section>

      {/* CTA NUDGE */}
      <section style={{ background: 'var(--color-bg-2)', padding: '72px 0', borderTop: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="reveal">
            <div>
              <div className="sec-num">Your project, next</div>
              <h2 className="h-section" style={{ marginTop: 8 }}>Want to see<br />what we'd do <em>here</em>?</h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-muted)', marginTop: 12, maxWidth: 440 }}>Book a free walk-through. We'll show up, measure, ask the right questions, and send a written quote within 48 hours.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link to="/contact" className="btn-primary">Request a free estimate →</Link>
              <Link to="/process" className="btn-ghost" style={{ textAlign: 'center' }}>How it works →</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Seen enough?" titleEm="Let's talk." primaryLabel="Get a Free Estimate" />
    </>
  );
}
