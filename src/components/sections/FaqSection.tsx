import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}

export function FaqSection({
  title = 'Questions Answered',
  subtitle,
  items,
}: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      className='py-20 px-[5%]'
      style={{ background: 'var(--color-bg-2)' }}
    >
      <div className='max-w-[780px] mx-auto'>
        <div className='mb-12'>
          <div className='sec-num'>FAQ</div>
          <h2 className='h-section text-ink'>{title}</h2>
          {subtitle && (
            <p className='text-[15px] text-muted leading-[1.7] mt-3 max-w-[520px]'>
              {subtitle}
            </p>
          )}
        </div>

        <div className='flex flex-col'>
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className='border-t border-line'>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className='w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent border-none cursor-pointer group'
                >
                  <span className='serif text-[18px] text-ink leading-[1.35] group-hover:text-accent transition-colors'>
                    {item.question}
                  </span>
                  <span
                    className={`
                      w-7 h-7 rounded-full border border-line flex items-center justify-center shrink-0
                      text-[13px] text-muted transition-all duration-300
                      ${isOpen ? 'rotate-45 border-accent text-accent' : ''}
                    `}
                  >
                    +
                  </span>
                </button>
                <div
                  className='overflow-hidden transition-all duration-300'
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className='text-[14.5px] text-muted leading-[1.75] pb-5 pr-12'>
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
