export function StickyCallBar() {
    return (
        <div className="hidden max-[768px]:flex fixed bottom-0 left-0 right-0 z-[998] bg-gradient-to-br from-blue to-ice py-[0.9rem] px-[6%] items-center justify-between gap-4 shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">
            <span className="text-[0.88rem] font-bold text-white">📍 Serving all of Long Island</span>
            <a
                href="tel:6311112222"
                className="bg-white text-blue2 py-[0.6rem] px-[1.4rem] rounded-full font-black text-[0.9rem] inline-flex items-center gap-[0.4rem] whitespace-nowrap"
            >
                <i className="fas fa-phone" /> Call 631-111-2222
            </a>
        </div>
    );
}
