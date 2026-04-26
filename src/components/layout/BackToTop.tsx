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
        fixed bottom-7 right-7 w-10 h-10 rounded-full z-[900]
        bg-accent text-bg border-none cursor-pointer
        text-[14px] items-center justify-center
        shadow-[0_6px_20px_rgba(110,168,255,0.35)] transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(110,168,255,0.45)]
        ${show ? "flex" : "hidden"}
      `}
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
