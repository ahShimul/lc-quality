import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { StickyCallBar } from './StickyCallBar';
import { BackToTop } from './BackToTop';

function useRevealObserver() {
  const loc = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07 },
    );
    const targets = document.querySelectorAll('.reveal:not(.in)');
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [loc.pathname]);
}

const TICKER_ITEMS = [
  'Licensed & Insured — Suffolk County',
  'Free Written Estimates',
  'Serving Long Island Since 2014',
  'Owner-Operated — No Subcontractors',
  '5-Star Google Rating (150+ Reviews)',
  'Kitchens · Bathrooms · Decks · Basements · Roofing',
];

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className='fixed top-0 left-0 right-0 z-[1000] bg-[#070b12] border-b border-line overflow-hidden h-[32px] flex items-center'>
      <div
        className='flex whitespace-nowrap'
        style={{ animation: 'tick 40s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className='flex items-center shrink-0'>
            <span className='mono text-[10.5px] tracking-[0.1em] uppercase text-muted px-8'>
              {item}
            </span>
            <span className='w-[3px] h-[3px] rounded-full bg-accent opacity-60' />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Layout() {
  useRevealObserver();
  return (
    <HelmetProvider>
      <div
        className='min-h-screen flex flex-col'
        style={{ paddingTop: '32px' }}
      >
        <Ticker />
        <div style={{ paddingTop: '68px' }}>
          <Navbar />
          <main className='flex-1'>
            <Outlet />
          </main>
          <Footer />
        </div>
        <StickyCallBar />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}
