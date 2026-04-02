import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/process', label: 'Process' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/areas', label: 'Areas' },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-[0.88rem] font-medium transition-colors duration-200 hover:text-ice ${isActive ? 'text-ice' : 'text-text'}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className='fixed top-0 left-0 right-0 z-[999] h-[68px] px-[6%] flex items-center justify-between bg-[rgba(5,16,31,0.88)] backdrop-blur-[20px] border-b border-gline'>
      <Link
        to='/'
        className='text-[1.3rem] font-black text-white tracking-[-0.5px]'
      >
        <img
          src='/images/lc-quality-logo.png'
          alt='LC Quality Logo'
          width={120}
          height={30}
        />
      </Link>

      {/* Desktop nav */}
      <ul className='flex gap-8 list-none items-center max-[820px]:hidden'>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <Link
            to='/contact'
            className='bg-gradient-to-br from-blue to-ice text-white px-5 py-2 rounded-full font-bold text-[0.88rem] shadow-[0_4px_18px_rgba(0,176,255,0.3)]'
          >
            Free Estimate
          </Link>
        </li>
      </ul>

      {/* Mobile dropdown — smooth slide + fade */}
      <div
        className={`
                    hidden max-[820px]:block
                    absolute top-[68px] left-0 right-0
                    bg-[rgba(5,16,31,0.97)] border-b border-gline
                    overflow-hidden
                    transition-[max-height,opacity] duration-300 ease-in-out
                    ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
                `}
      >
        <ul className='flex flex-col items-start gap-[0.9rem] px-[6%] py-6 list-none'>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to='/contact'
              className='bg-gradient-to-br from-blue to-ice text-white px-5 py-2 rounded-full font-bold text-[0.88rem] shadow-[0_4px_18px_rgba(0,176,255,0.3)]'
            >
              Free Estimate
            </Link>
          </li>
        </ul>
      </div>

      <button
        className='hidden max-[820px]:flex flex-col gap-[5px] cursor-pointer bg-none border-none'
        aria-label='Toggle menu'
        onClick={() => setOpen(!open)}
      >
        <span className='block w-6 h-0.5 bg-white rounded-sm' />
        <span className='block w-6 h-0.5 bg-white rounded-sm' />
        <span className='block w-6 h-0.5 bg-white rounded-sm' />
      </button>
    </nav>
  );
}
