import { useState, useEffect } from "react";

export function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className={`
        fixed bottom-7 right-7 w-11 h-11 rounded-full z-[900]
        bg-gradient-to-br from-blue to-ice text-white border-none cursor-pointer
        text-base items-center justify-center
        shadow-[0_6px_20px_rgba(0,176,255,0.4)] transition-transform hover:-translate-y-1
        ${show ? "flex" : "hidden"}
      `}
        >
            <i className="fas fa-arrow-up" />
        </button>
    );
}
