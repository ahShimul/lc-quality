import { Link } from "react-router-dom";

interface Props {
  title?: string;
  titleEm?: string;
  subtitle?: string;
  primaryLabel?: string;
}

export function CtaBand({
  title = "Ready to start",
  titleEm = "your project?",
  subtitle = "Get a detailed written estimate — no pressure, no commitment.",
  primaryLabel = "Get a Free Estimate",
}: Props) {
  return (
    <section className="relative py-24 px-[5%] overflow-hidden" style={{ background: "var(--color-bg)" }}>
      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(ellipse, rgba(110,168,255,0.3), transparent 70%)" }}
      />
      <div className="max-w-[720px] mx-auto text-center relative z-10">
        <h2 className="h-section text-ink mb-4">
          {title} <em>{titleEm}</em>
        </h2>
        <p className="text-[15px] text-muted leading-[1.7] mb-8 max-w-[480px] mx-auto">
          {subtitle}
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Link to="/contact" className="btn-primary">
            <span>{primaryLabel}</span>
            <i className="fas fa-arrow-right text-[11px]" />
          </Link>
          <a href="tel:6316059477" className="btn-ghost">
            <span>(631) 605-9477</span>
            <i className="fas fa-phone text-[11px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
