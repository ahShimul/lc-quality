import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { Breadcrumb } from '../../components/sections/Breadcrumb';
import { TrustStrip } from '../../components/sections/TrustStrip';
import { FaqSection } from '../../components/sections/FaqSection';
import { CtaBand } from '../../components/sections/CtaBand';
import { AreasSection } from '../../components/sections/AreasSection';
import { useFadeIn } from '../../hooks/useFadeIn';

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const data = services[slug || ''];
  const fadeRef = useFadeIn();

  if (!data) {
    return (
      <div className='min-h-screen flex items-center justify-center pt-[68px]'>
        <h1 className='text-2xl text-white'>Service not found</h1>
      </div>
    );
  }

  return (
    <div ref={fadeRef}>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name='description' content={data.meta.description} />
        <link rel='canonical' href={data.meta.canonical} />
      </Helmet>

      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: data.hero.title.split(' in')[0] || data.hero.title },
        ]}
      />

      {/* Hero */}
      <section
        className='min-h-[88vh] flex items-center py-20 px-[6%] relative overflow-hidden'
        style={{
          background: `linear-gradient(160deg, rgba(40,60,90,0.55) 0%, rgba(10,26,53,0.92) 50%, rgba(5,16,31,0.98) 100%), url('${data.overview.image}') center/cover no-repeat`,
        }}
      >
        <div className='max-w-[1160px] mx-auto'>
          <div className='max-w-[760px] relative z-10 fi'>
            <div className='inline-flex items-center gap-2 bg-[rgba(0,176,255,0.1)] border border-[rgba(0,176,255,0.3)] px-4 py-[0.38rem] rounded-full text-[0.78rem] text-ice font-extrabold tracking-wider mb-5'>
              <i className='fas fa-award' /> {data.hero.badge}
            </div>

            <h1 className='text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.06] tracking-[-2px] text-white mb-4'>
              {data.hero.title}
              <br />
              <em className='not-italic text-ice'>{data.hero.titleEm}</em>
            </h1>

            <p className='text-[1.05rem] text-muted leading-[1.78] max-w-[580px] mb-7'>
              {data.hero.description}
            </p>

            {data.hero.availability && (
              <div className='inline-flex items-center gap-2 bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.3)] px-4 py-[0.38rem] rounded-full text-[0.78rem] text-good font-extrabold mb-6'>
                <span className='w-[7px] h-[7px] rounded-full bg-good animate-pulse' />
                {data.hero.availability}
              </div>
            )}

            <div className='flex gap-4 flex-wrap mb-6'>
              <Link to='/contact' className='btn-grad'>
                <i className='fas fa-clipboard-check' /> {data.hero.ctaLabel}
              </Link>
              <a href='tel:6316059477' className='btn-ghost'>
                <i className='fas fa-phone' /> (631) 605-9477
              </a>
            </div>

            <div className='flex gap-5 flex-wrap'>
              {data.hero.microItems.map((item) => (
                <div
                  key={item.text}
                  className='flex items-center gap-[0.4rem] text-[0.8rem] font-bold text-white/75'
                >
                  <i className={`fas fa-${item.icon} text-ice`} /> {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustStrip chips={data.trustChips} />

      {/* Overview */}
      <section className='py-20 px-[6%] bg-navy'>
        <div className='max-w-[1160px] mx-auto'>
          <div className='grid grid-cols-[1.1fr_1fr] gap-16 items-center max-[860px]:grid-cols-1'>
            <div
              className='rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.45)] border border-gline aspect-[4/3] fi'
              style={{
                background: `url('${data.overview.image}') center/cover`,
              }}
            />
            <div className='fi'>
              <div className='inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2'>
                {data.overview.eyebrow}
              </div>
              <h2 className='text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white tracking-[-1px] mb-4 leading-[1.15]'>
                {data.overview.title}
                <br />
                <em className='not-italic text-ice'>{data.overview.titleEm}</em>
              </h2>
              {data.overview.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className='text-[0.93rem] text-muted leading-[1.8] mb-3'
                >
                  {p}
                </p>
              ))}

              <div className='grid grid-cols-3 gap-4 my-6'>
                {data.overview.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='bg-[rgba(255,255,255,0.04)] border border-gline rounded-2xl p-4 text-center'
                  >
                    <div className='text-[1.8rem] font-black text-white tracking-[-1px]'>
                      {stat.num}
                    </div>
                    <div className='text-[0.72rem] text-muted font-bold uppercase tracking-wider mt-1'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link to='/contact' className='btn-grad'>
                <i className='fas fa-clipboard-check' /> Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className='py-20 px-[6%] bg-navy2'>
        <div className='max-w-[1160px] mx-auto'>
          <div className='text-center mb-11 fi'>
            <div className='inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2'>
              What's Included
            </div>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              {data.included.title}
            </h2>
            <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto'>
              {data.included.subtitle}
            </p>
          </div>

          <div className='grid grid-cols-2 gap-4 max-[640px]:grid-cols-1 fi'>
            {data.included.items.map((item) => (
              <div
                key={item.title}
                className='bg-[rgba(255,255,255,0.03)] border border-gline rounded-2xl p-[1.1rem] flex items-start gap-3 transition-colors hover:border-[rgba(0,176,255,0.35)]'
              >
                <div className='w-9 h-9 rounded-[10px] bg-gradient-to-br from-blue to-ice flex items-center justify-center text-[0.88rem] text-white shrink-0'>
                  <i className={`fas fa-${item.icon}`} />
                </div>
                <div>
                  <strong className='block font-extrabold text-[0.88rem] text-white mb-[0.15rem]'>
                    {item.title}
                  </strong>
                  <span className='text-[0.78rem] text-muted leading-[1.55]'>
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {data.included.note && (
            <div className='mt-7 bg-[rgba(0,176,255,0.06)] border border-[rgba(0,176,255,0.2)] rounded-2xl p-5 text-[0.87rem] text-text leading-[1.65] fi'>
              <strong className='text-ice'>Moisture concerns?</strong>{' '}
              {data.included.note}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className='py-20 px-[6%] bg-navy'>
        <div className='max-w-[1160px] mx-auto'>
          <div className='text-center mb-11 fi'>
            <div className='inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2'>
              Our Process
            </div>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              How It Works
            </h2>
            <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto'>
              From estimate to final walkthrough — here's exactly what to
              expect.
            </p>
          </div>

          <div className='flex flex-col gap-0 max-w-[780px] mx-auto fi'>
            {data.process.map((step, idx) => (
              <div
                key={idx}
                className='grid grid-cols-[60px_1fr] gap-6 relative pb-8 last:pb-0'
              >
                {idx < data.process.length - 1 && (
                  <div className='absolute left-[29px] top-[60px] bottom-0 w-0.5 bg-gradient-to-b from-ice to-transparent' />
                )}
                <div className='w-[60px] h-[60px] rounded-full bg-gradient-to-br from-blue to-ice flex items-center justify-center font-black text-[1.1rem] text-white shrink-0 shadow-[0_6px_20px_rgba(0,176,255,0.4)]'>
                  {idx + 1}
                </div>
                <div className='pt-[0.6rem]'>
                  <h3 className='text-[1.02rem] font-black text-white mb-[0.4rem]'>
                    {step.title}
                  </h3>
                  <p className='text-[0.87rem] text-muted leading-[1.72]'>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className='py-20 px-[6%] bg-navy2'>
        <div className='max-w-[1160px] mx-auto'>
          <div className='grid grid-cols-2 gap-12 items-start max-[780px]:grid-cols-1 max-[780px]:gap-8'>
            <div className='fi'>
              <div className='inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2'>
                Honest Pricing
              </div>
              <h2 className='text-[clamp(1.5rem,2.8vw,2.2rem)] font-black text-white tracking-[-1px] mb-4 leading-[1.2]'>
                Costs
                <br />
                <em className='not-italic text-ice'>on Long Island</em>
              </h2>
              <div className='inline-flex items-center gap-[0.6rem] bg-gradient-to-br from-[rgba(21,101,192,0.3)] to-[rgba(0,176,255,0.2)] border border-[rgba(0,176,255,0.4)] px-[1.4rem] py-[0.7rem] rounded-full mb-5'>
                <span className='text-[1.5rem] font-black text-white tracking-[-1px]'>
                  {data.pricing.range}
                </span>
                <small className='text-[0.78rem] text-muted font-semibold'>
                  {data.pricing.rangeNote}
                </small>
              </div>
              <p className='text-[0.91rem] text-muted leading-[1.78] mb-4'>
                {data.pricing.description}
              </p>
              <div>
                <h4 className='text-[0.78rem] font-black text-ice uppercase tracking-wider mb-3'>
                  What affects the price
                </h4>
                <ul className='list-none'>
                  {data.pricing.factors.map((f) => (
                    <li
                      key={f}
                      className="text-[0.85rem] text-text pl-[1.1rem] relative mb-2 before:content-['↑'] before:absolute before:left-0 before:text-muted before:text-[0.75rem]"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to='/contact' className='btn-grad mt-5 inline-flex'>
                <i className='fas fa-clipboard-check' /> Get Your Free Estimate
              </Link>
            </div>

            <div className='flex flex-col gap-[0.9rem] fi'>
              {data.pricing.cards.map((card) => (
                <div
                  key={card.title}
                  className='bg-[rgba(5,16,31,0.9)] border border-gline rounded-[18px] p-5 flex items-center gap-4'
                >
                  <div
                    className={`w-11 h-11 rounded-xl shrink-0 flex items-center justify-center text-base text-white bg-gradient-to-br ${card.color}`}
                  >
                    <i className={`fas fa-${card.icon}`} />
                  </div>
                  <div>
                    <strong className='block font-extrabold text-white text-[0.88rem] mb-[0.1rem]'>
                      {card.title}
                    </strong>
                    <span className='text-[0.76rem] text-muted'>
                      {card.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No Subcontractors */}
      <section className='py-12 px-[6%] bg-navy'>
        <div className='max-w-[1160px] mx-auto bg-gradient-to-br from-[rgba(21,101,192,0.15)] to-[rgba(0,176,255,0.08)] border border-[rgba(0,176,255,0.25)] rounded-3xl p-10 grid grid-cols-[1fr_1.5fr] gap-10 items-center max-[760px]:grid-cols-1 fi'>
          <div className='text-center'>
            <span className='text-[4rem] block mb-3'>👷</span>
            <h3 className='text-[1.3rem] font-black text-white tracking-[-0.5px] leading-[1.2]'>
              No Subcontractors.
              <br />
              Not Ever.
            </h3>
          </div>
          <div>
            <p className='text-[0.93rem] text-muted leading-[1.8] mb-3'>
              Most jobs get passed between crews. Here, you deal with one person
              from estimate to final trim. That means cleaner communication and
              better quality control.
            </p>
            <ul className='list-none flex flex-col gap-2'>
              {[
                'One person accountable for the finished result',
                'Clean trim, tight joints, and neat details',
                'Electrical handled correctly and safely',
                'Clear scope and written estimate',
                'No subcontractor markup',
              ].map((item) => (
                <li
                  key={item}
                  className='text-[0.88rem] text-text flex items-center gap-[0.65rem]'
                >
                  <i className='fas fa-check text-ice' /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection
        title={`${data.hero.title.split(' in')[0]} Questions Answered`}
        subtitle='Still have questions? Call or text — I respond personally.'
        items={data.faq}
      />

      {/* Related Services */}
      <section className='py-20 px-[6%] bg-navy2'>
        <div className='max-w-[1160px] mx-auto'>
          <div className='text-center mb-11 fi'>
            <div className='inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2'>
              Related Services
            </div>
            <h2 className='text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3'>
              Often Done Together
            </h2>
            <p className='text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto'>
              Bundle services for better value.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-5 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1'>
            {data.related.map((rel) => (
              <a
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className='bg-[rgba(5,16,31,0.9)] border border-gline rounded-3xl overflow-hidden transition-all hover:-translate-y-[5px] hover:border-[rgba(0,176,255,0.4)] fi'
              >
                <div className='relative h-[140px] overflow-hidden'>
                  <img
                    src={rel.imgClass}
                    alt={rel.title}
                    className='absolute inset-0 w-full h-full object-cover'
                    loading='eager'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-[rgba(5,16,31,0.2)] to-[rgba(5,16,31,0.72)]' />
                </div>
                <div className='p-5'>
                  <h3 className='text-[0.95rem] font-black text-white mb-1'>
                    {rel.title}
                  </h3>
                  <p className='text-[0.78rem] text-muted mb-3 leading-[1.55]'>
                    {rel.desc}
                  </p>
                  <div className='text-[0.8rem] font-extrabold text-ice inline-flex items-center gap-[0.35rem]'>
                    View Service <i className='fas fa-arrow-right' />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AreasSection
        eyebrow={`${data.hero.title.split(' in')[0]} Service Areas`}
        seoParagraph={data.seoParagraph}
      />

      <CtaBand
        title={`Ready to Start Your ${data.hero.title.split(' in')[0]}?`}
        primaryLabel={data.hero.ctaLabel}
      />
    </div>
  );
}
