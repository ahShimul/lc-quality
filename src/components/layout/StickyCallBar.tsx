export function StickyCallBar() {
  return (
    <div className="hidden max-[768px]:flex fixed bottom-0 left-0 right-0 z-[998] bg-[rgba(11,16,24,0.94)] backdrop-blur-[12px] border-t border-line py-3 px-[5%] items-center justify-between gap-4 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]">
      <span className="text-[13px] font-medium text-ink-2">📍 Serving all of Long Island</span>
      <a
        href="tel:6316059477"
        className="bg-accent text-bg py-[10px] px-5 rounded-full font-semibold text-[13px] inline-flex items-center gap-2 whitespace-nowrap"
      >
        <i className="fas fa-phone text-[11px]" /> Call Now
      </a>
    </div>
  );
}
