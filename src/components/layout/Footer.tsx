import { Link } from "react-router-dom";

const services = [
  { to: "/services/kitchen-remodeling", label: "Kitchen Remodeling" },
  { to: "/services/bathroom-renovation", label: "Bathroom Renovation" },
  { to: "/services/basement-finishing", label: "Basement Finishing" },
  { to: "/services/flooring", label: "Flooring Installation" },
  { to: "/services/painting", label: "Painting" },
  { to: "/services/deck-outdoor", label: "Deck Building" },
  { to: "/services/roofing", label: "Exterior Repairs" },
];

const nav = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/reviews", label: "Reviews" },
  { to: "/areas", label: "Areas" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#070b12] border-t border-line">
      {/* Big CTA */}
      <div className="max-w-[1320px] mx-auto px-[5%] pt-20 pb-16 border-b border-line">
        <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-end min-[900px]:justify-between gap-8">
          <h2 className="h-section text-ink max-w-[540px]">
            Let's build something{" "}
            <em>that lasts.</em>
          </h2>
          <div className="flex gap-3 flex-wrap">
            <Link to="/contact" className="btn-primary">
              <span>Get a Free Estimate</span>
              <i className="fas fa-arrow-right text-[11px]" />
            </Link>
            <a href="tel:6316059477" className="btn-ghost">
              <span>(631) 605-9477</span>
              <i className="fas fa-phone text-[11px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="max-w-[1320px] mx-auto px-[5%] py-14">
        <div className="grid grid-cols-4 gap-10 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[30px] h-[30px] rounded-[8px] bg-accent flex items-center justify-center text-[14px] font-black text-bg shrink-0">
                L
              </div>
              <div className="text-[13px] font-semibold text-ink">
                LC Quality Improvements
              </div>
            </div>
            <p className="text-[13px] text-muted leading-[1.7] mb-4">
              Licensed & insured general contractor serving all of Long Island. Owner-operated since 2014.
            </p>
            <div className="flex items-center gap-2 text-[12px] text-ok font-medium">
              <span className="w-[6px] h-[6px] rounded-full bg-ok" />
              Accepting new projects
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mono text-[11px] tracking-[0.14em] uppercase text-muted mb-5">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:6316059477" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors flex items-center gap-2">
                <i className="fas fa-phone text-[10px] text-muted" /> (631) 605-9477
              </a>
              <a href="mailto:Lcqualityimprovements@gmail.com" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors flex items-center gap-2">
                <i className="fas fa-envelope text-[10px] text-muted" /> Email Us
              </a>
              <a href="sms:6316059477" className="text-[13.5px] text-ink-2 hover:text-accent transition-colors flex items-center gap-2">
                <i className="fas fa-comment text-[10px] text-muted" /> Text Us
              </a>
              <div className="text-[13.5px] text-ink-2 flex items-center gap-2">
                <i className="fas fa-location-dot text-[10px] text-muted" /> Centereach, NY 11720
              </div>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mono text-[11px] tracking-[0.14em] uppercase text-muted mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mono text-[11px] tracking-[0.14em] uppercase text-muted mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              {services.map((s) => (
                <Link key={s.to} to={s.to} className="text-[13.5px] text-ink-2 hover:text-accent transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="max-w-[1320px] mx-auto px-[5%] py-5 border-t border-line flex items-center justify-between flex-wrap gap-4">
        <span className="mono text-[10.5px] tracking-[0.08em] text-muted">
          © {new Date().getFullYear()} LC Quality Improvements. All rights reserved.
        </span>
        <span className="mono text-[10.5px] tracking-[0.08em] text-muted">
          Licensed & Insured — Nassau & Suffolk County, NY
        </span>
      </div>
    </footer>
  );
}
