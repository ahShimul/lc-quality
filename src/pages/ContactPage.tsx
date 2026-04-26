import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [scope, setScope] = useState<string[]>([]);
  const [budget, setBudget] = useState(40);

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
        <title>Contact LC Quality Improvements | Free Estimate</title>
        <meta name="description" content="Contact LC Quality Improvements for a free written estimate on Long Island. Call, text, or send details through the form." />
      </Helmet>

      {/* PAGE HEADER */}
      <section style={{ background: 'var(--color-bg)', padding: '120px 0 72px', borderBottom: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-num">Get in touch</div>
          <h1 className="h-display" style={{ maxWidth: 720, marginTop: 12 }}>
            Tell us about<br />the <em>project</em>.
          </h1>
          <p style={{ maxWidth: 560, marginTop: 20, fontSize: 16, lineHeight: 1.7, color: 'var(--color-muted)' }}>
            We'll get back to you within one business day to set up a free in-home walk-through. No pressure, no deposit to see a number.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section style={{ background: 'var(--color-bg)', padding: '72px 0 96px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>

            {/* Left: info */}
            <div className="reveal">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {[
                  { label: 'Call or text', val: '(631) 848-3828', href: 'tel:6318483828', sub: 'Mon–Sat, 7 AM–7 PM' },
                  { label: 'Email', val: 'lcqualityimprovements@gmail.com', href: 'mailto:lcqualityimprovements@gmail.com', sub: 'Response within 24 hrs' },
                  { label: 'Based in', val: 'Centereach, NY 11720', sub: 'Suffolk & Nassau County' },
                  { label: 'License', val: 'NY State Licensed & Insured', sub: 'HIC license available on request' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 6 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-accent)', display: 'block', wordBreak: 'break-word', textDecoration: 'none' }}>{item.val}</a>
                    ) : (
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-ink)' }}>{item.val}</div>
                    )}
                    <div style={{ fontSize: 13, color: 'var(--color-muted)', marginTop: 3 }}>{item.sub}</div>
                  </div>
                ))}

                {/* Trust chips */}
                <div>
                  <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 10 }}>What to expect</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {['Free written estimate', 'Owner on every job', 'Licensed & insured', '1-year warranty', 'No pushy sales'].map((t) => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--color-ink)' }}>
                        <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>→</span>{t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal">
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
                        <label>04 · Town / neighborhood</label>
                        <input name="town" placeholder="Centereach, NY" required />
                      </div>
                    </div>
                    <div className="form-col">
                      <div className="field">
                        <label>05 · Scope (select all that apply)</label>
                        <div className="chips-multi">
                          {['Kitchen', 'Bathroom', 'Addition', 'Basement', 'Flooring', 'Deck', 'Roofing', 'Painting', 'Other'].map((s) => (
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
                        <textarea name="message" placeholder="Existing layout, inspiration photos, timing constraints, permit history…" />
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
          </div>
        </div>
      </section>
    </>
  );
}
