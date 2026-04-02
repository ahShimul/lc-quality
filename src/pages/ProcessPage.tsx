import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { CtaBand } from '../components/sections/CtaBand';

const processSteps = [
  {
    num: '01',
    icon: 'comments',
    title: 'We Listen',
    desc: 'Tell us your vision, timeline, and budget — zero pressure. We ask the right questions so nothing is left to guesswork.',
  },
  {
    num: '02',
    icon: 'file-invoice-dollar',
    title: 'Free Estimate',
    desc: 'You receive a detailed written quote with clear line items — no hidden costs, no surprises at the end.',
  },
  {
    num: '03',
    icon: 'pencil-ruler',
    title: 'Design & Plan',
    desc: 'We help you select materials, finishes, and layouts. Our team guides every decision with real product samples.',
  },
  {
    num: '04',
    icon: 'hard-hat',
    title: 'We Build',
    desc: 'Our licensed crew arrives on time, every day. You get daily progress updates and a clean job site throughout.',
  },
  {
    num: '05',
    icon: 'trophy',
    title: 'Final Walkthrough',
    desc: "You inspect every inch before we sign off. We don't consider the job done until you're 100% satisfied.",
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

export function ProcessPage() {
  const fadeRef = useFadeIn();

  return (
    <div ref={fadeRef}>
      <Helmet>
        <title>Our Process | LC Quality Improvements</title>
        <meta
          name='description'
          content='Learn how LC Quality Improvements works — a simple 5-step process from free estimate to final walkthrough. Serving Long Island, NY.'
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
              How It Works
            </span>
            <span
              className='w-8 h-px'
              style={{
                background: 'linear-gradient(to left, transparent, #00B0FF)',
              }}
            />
          </div>
          <h1 className='text-[clamp(2rem,5vw,3.4rem)] font-black text-white tracking-[-1.5px] leading-[1.1] mb-4 fi'>
            Our Simple <em className='not-italic text-ice'>5-Step Process</em>
          </h1>
          <p className='text-muted text-[0.97rem] leading-[1.75] max-w-[520px] mx-auto fi'>
            No guesswork, no stress. Here’s exactly what to expect from your
            first call to the final walkthrough.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS — bento layout */}
      <section className='relative py-20 px-[6%] bg-navy overflow-hidden'>
        <div
          className='absolute bottom-0 right-1/4 w-[600px] h-[500px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse, rgba(0,176,255,0.06) 0%, transparent 70%)',
          }}
        />
        <div className='max-w-[1180px] mx-auto relative z-10'>
          {/* Sequential tracker */}
          <div className='relative flex items-start justify-between mb-10 px-2 fi max-[700px]:hidden'>
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
                  className='w-9 h-9 rounded-full flex items-center justify-center text-[0.78rem] font-black border-2'
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

          {/* Bento grid */}
          <div className='grid grid-cols-3 gap-5 items-stretch max-[900px]:grid-cols-1'>
            {/* Steps 01–04 — 2×2 grid */}
            <div className='col-span-2 grid grid-cols-2 gap-5 max-[600px]:grid-cols-1'>
              {processSteps.slice(0, 4).map((s) => (
                <div
                  key={s.num}
                  className='group relative bg-[rgba(255,255,255,0.04)] border border-gline rounded-[22px] p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,176,255,0.4)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.55)] fi'
                >
                  <div
                    className='absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                    style={{
                      background:
                        'radial-gradient(ellipse at 0% 0%, rgba(0,176,255,0.06), transparent 60%)',
                    }}
                  />
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

            {/* Step 05 — featured card */}
            <div
              className='relative overflow-hidden rounded-[22px] p-8 flex flex-col fi'
              style={{
                background:
                  'linear-gradient(155deg, #0D47A1 0%, #0a2d6e 50%, #061d4a 100%)',
                border: '1px solid rgba(0,176,255,0.28)',
                minHeight: '420px',
              }}
            >
              <div
                className='absolute inset-0 pointer-events-none'
                style={{
                  background:
                    'radial-gradient(ellipse at 15% 85%, rgba(0,176,255,0.22), transparent 60%)',
                }}
              />
              <div
                className='absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none'
                style={{
                  background:
                    'radial-gradient(circle, rgba(0,176,255,0.12), transparent 70%)',
                }}
              />
              <div className='relative z-10 flex flex-col h-full'>
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
                  Whether you’re remodeling a kitchen or finishing a basement —
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

      {/* COMPARE TABLE */}
      <section className='py-20 px-[6%] bg-navy2'>
        <div className='max-w-[1180px] mx-auto'>
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
                    LC Quality ✶
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
                          row.us.includes('✔') ? 'text-good' : 'text-[#FF5252]'
                        }
                      >
                        {row.us}
                      </span>
                    </td>
                    <td className='p-[0.85rem] text-center text-[0.86rem] border-b border-[rgba(255,255,255,0.06)]'>
                      <span
                        className={
                          row.chain === '✔'
                            ? 'text-good'
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
                            ? 'text-good'
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

      <CtaBand />
    </div>
  );
}
