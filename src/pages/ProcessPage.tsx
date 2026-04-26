import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CtaBand } from '../components/sections/CtaBand';

const compareRows = [
  { feature: 'Licensed & Insured', us: '✔ Yes', chain: '✔', unlic: '✘' },
  { feature: 'Owner on Every Job', us: '✔ Always', chain: '✘', unlic: '~' },
  { feature: 'Written Line-Item Quote', us: '✔ Detailed', chain: '~', unlic: '~' },
  { feature: 'Written Change Orders', us: '✔ Required', chain: '~', unlic: '✘' },
  { feature: 'Permits Pulled Properly', us: '✔ Always', chain: '~', unlic: '✘' },
  { feature: 'Weekly Progress Updates', us: '✔ Yes', chain: '✘', unlic: '✘' },
  { feature: 'Clean Job Site Daily', us: '✔ Yes', chain: '~', unlic: '~' },
  { feature: '1-Year Workmanship Warranty', us: '✔ Written', chain: '~', unlic: '✘' },
];

export function ProcessPage() {
  return (
    <>
      <Helmet>
        <title>Our Process | LC Quality Improvements</title>
        <meta name="description" content="How we work — from the first walk-through to the final punch list. Transparent quotes, weekly updates, and a 1-year written warranty." />
      </Helmet>

      {/* PAGE HEADER */}
      <section style={{ background: 'var(--color-bg)', padding: '120px 0 72px', borderBottom: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-num">Our Process</div>
          <h1 className="h-display" style={{ maxWidth: 720, marginTop: 12 }}>
            Four steps.<br />No <em>surprises</em>.
          </h1>
          <p style={{ maxWidth: 560, marginTop: 20, fontSize: 16, lineHeight: 1.7, color: 'var(--color-muted)' }}>
            Most homeowners we meet have been burned by a contractor before. Our process is built to be the opposite of that — transparent quotes, weekly site walks, written change orders.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section style={{ background: 'var(--color-bg)', padding: '72px 0 96px' }}>
        <div className="wrap">
          <div className="process-grid reveal">
            {[
              {
                n: 'i.',
                title: 'Walk-through',
                desc: 'We visit the home, measure every inch, and listen carefully to what you want. We ask questions you haven\'t thought of yet. Usually about an hour.',
                note: 'Free · 60 min · No commitment',
                detail: 'We bring a measuring tape, a camera, and our knowledge of what Long Island permits require. You get our full attention.',
              },
              {
                n: 'ii.',
                title: 'Written quote',
                desc: 'A line-itemed estimate within 48 hours. Labor and materials are listed separately. No "allowances" that balloon later.',
                note: 'Within 48 hrs · PDF delivered',
                detail: 'If something is undetermined at quote time, we call it out explicitly. No hidden costs introduced mid-project.',
              },
              {
                n: 'iii.',
                title: 'Build',
                desc: 'Site protection goes up on day one. We send a photo update at the end of every week. Written change orders for anything outside original scope.',
                note: '2–14 wks · Weekly updates',
                detail: 'Luis is on site every day. If a sub-trade (plumber, electrician) is needed, it\'s someone we\'ve worked with for years — not a stranger.',
              },
              {
                n: 'iv.',
                title: 'Walk & warrant',
                desc: 'We walk through every item on the punch list together. Nothing is closed out until you say it\'s right. One-year workmanship warranty in writing.',
                note: '1-yr warranty · Written',
                detail: 'After the walk, we handle any punch list items — usually within a few days. The warranty covers workmanship; manufacturer warranties cover materials.',
              },
            ].map((s) => (
              <div key={s.n} className="step">
                <div>
                  <div className="step-n">{s.n}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <p style={{ fontSize: 13, color: 'var(--color-muted)', marginTop: 12, lineHeight: 1.65 }}>{s.detail}</p>
                </div>
                <div className="mono" style={{ fontSize: '10.5px', letterSpacing: '.1em', color: 'var(--color-muted)', textTransform: 'uppercase' }}>{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section style={{ background: 'var(--color-bg-2)', padding: '96px 0', borderTop: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <div className="sec-num">LC Quality vs. the alternatives</div>
              <h2 className="h-section">Why homeowners<br />choose <em>us</em>.</h2>
            </div>
            <div className="lead">
              <p>We're not the cheapest quote. We're the one you'll be glad you got after the job is done.</p>
            </div>
          </div>

          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520, fontFamily: 'var(--font-sans)', fontSize: 14 }}>
              <thead>
                <tr>
                  <th style={{ padding: '14px 18px', textAlign: 'left', background: 'var(--color-paper)', color: 'var(--color-ink)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', borderBottom: '1px solid var(--color-line)' }}>Feature</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center', background: 'rgba(110,168,255,.12)', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', borderBottom: '1px solid var(--color-line)' }}>LC Quality ✦</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center', background: 'var(--color-paper)', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', borderBottom: '1px solid var(--color-line)' }}>Big-Box Chains</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center', background: 'var(--color-paper)', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', borderBottom: '1px solid var(--color-line)' }}>Unlicensed Crew</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 1 ? 'rgba(255,255,255,.025)' : 'transparent' }}>
                    <td style={{ padding: '13px 18px', borderBottom: '1px solid var(--color-line)', color: 'var(--color-ink)' }}>{row.feature}</td>
                    <td style={{ padding: '13px 18px', textAlign: 'center', borderBottom: '1px solid var(--color-line)', background: 'rgba(110,168,255,.05)', color: '#6ee7b7', fontWeight: 600 }}>{row.us}</td>
                    <td style={{ padding: '13px 18px', textAlign: 'center', borderBottom: '1px solid var(--color-line)', color: row.chain === '✔' ? '#6ee7b7' : row.chain === '✘' ? '#f87171' : 'var(--color-muted)' }}>{row.chain}</td>
                    <td style={{ padding: '13px 18px', textAlign: 'center', borderBottom: '1px solid var(--color-line)', color: row.unlic === '✔' ? '#6ee7b7' : row.unlic === '✘' ? '#f87171' : 'var(--color-muted)' }}>{row.unlic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COMMITMENT STRIP */}
      <section style={{ background: 'var(--color-bg)', padding: '72px 0', borderTop: '1px solid var(--color-line)' }}>
        <div className="wrap">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { num: 'i.', label: 'Free estimate', sub: 'Written, line-itemed, no pressure' },
              { num: 'ii.', label: 'Owner on-site', sub: 'Luis runs every job personally' },
              { num: 'iii.', label: 'No surprises', sub: 'Written change orders for every addition' },
              { num: 'iv.', label: '1-year warranty', sub: 'On all workmanship, in writing' },
            ].map((item) => (
              <div key={item.num} style={{ padding: '28px 24px', border: '1px solid var(--color-line)', borderRadius: 12, background: 'var(--color-paper)' }}>
                <div className="step-n" style={{ fontSize: 28, marginBottom: 10 }}>{item.num}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-ink)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.6 }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to walk through" titleEm="your project?" primaryLabel="Book a Free Walk-Through" />
    </>
  );
}
