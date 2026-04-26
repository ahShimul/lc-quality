import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/process', label: 'Process' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/areas', label: 'Areas' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <header
      className={`
        fixed top-[32px] left-0 right-0 z-[999] transition-all duration-300
        ${
          scrolled
            ? 'bg-[rgba(11,16,24,0.88)] backdrop-blur-[14px] border-b border-line shadow-[0_4px_24px_rgba(0,0,0,0.35)]'
            : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className='max-w-[1320px] mx-auto px-[5%] flex items-center justify-between h-[68px]'>
        {/* Brand */}
        <Link to='/' className='flex items-center gap-3 group'>
          <div className='w-[34px] h-[34px] rounded-[9px] bg-accent flex items-center justify-center text-[16px] font-black text-bg shrink-0 transition-transform duration-300 group-hover:rotate-[-4deg]'>
            L
          </div>
          <div className='leading-[1.15]'>
            <div className='text-[14.5px] font-semibold text-ink tracking-[-0.01em]'>
              LC Quality Improvements
            </div>
            <div className='text-[10.5px] text-muted tracking-[0.04em]'>
              — est. Centereach, NY
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className='hidden min-[860px]:flex items-center gap-1'>
          {NAV.map((n) => {
            const active =
              loc.pathname === n.to || loc.pathname.startsWith(n.to + '/');
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`
                  px-3 py-[6px] rounded-full text-[13.5px] font-medium transition-all duration-200
                  ${
                    active
                      ? 'text-accent bg-[rgba(110,168,255,0.1)]'
                      : 'text-ink-2 hover:text-ink hover:bg-[rgba(255,255,255,0.06)]'
                  }
                `}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className='flex items-center gap-3'>
          <a
            href='tel:6316059477'
            className='hidden min-[860px]:inline-flex items-center gap-2 px-4 py-[9px] rounded-full border border-[rgba(255,255,255,0.2)] text-[13px] font-medium text-ink hover:border-accent hover:text-accent transition-all duration-200'
          >
            <span className='relative flex w-[7px] h-[7px]'>
              <span className='absolute inset-0 rounded-full bg-ok animate-ping opacity-60' />
              <span className='relative rounded-full w-[7px] h-[7px] bg-ok' />
            </span>
            (631) 605-9477
          </a>

          <Link
            to='/contact'
            className='hidden min-[860px]:inline-flex btn-primary text-[13px] !py-[9px] !px-4'
          >
            Free Estimate
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className='min-[860px]:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer'
            aria-label='Menu'
          >
            <span
              className={`w-5 h-[1.5px] bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-[3.25px]' : ''}`}
            />
            <span
              className={`w-5 h-[1.5px] bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-[3.25px]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`
          min-[860px]:hidden overflow-hidden transition-all duration-300
          border-t border-line bg-[rgba(11,16,24,0.96)] backdrop-blur-[14px]
          ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className='px-[5%] py-5 flex flex-col gap-1'>
          {NAV.map((n) => {
            const active = loc.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`
                  py-[10px] px-3 rounded-xl text-[15px] font-medium transition-colors
                  ${active ? 'text-accent bg-[rgba(110,168,255,0.08)]' : 'text-ink-2 hover:text-ink'}
                `}
              >
                {n.label}
              </Link>
            );
          })}
          <div className='flex gap-3 mt-3 pt-3 border-t border-line'>
            <a
              href='tel:6316059477'
              className='btn-ghost flex-1 justify-center text-[13px] !py-[10px]'
            >
              <i className='fas fa-phone text-[11px]' /> Call
            </a>
            <Link
              to='/contact'
              className='btn-primary flex-1 justify-center text-[13px] !py-[10px]'
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
