import { Link } from "react-router-dom";

const serviceLinks = [
    { to: "/services/kitchen-remodeling", label: "Kitchen Remodeling" },
    { to: "/services/bathroom-renovation", label: "Bathroom Renovation" },
    { to: "/services/electrical-work", label: "Electrical Work" },
    { to: "/services/deck-outdoor", label: "Deck Building" },
    { to: "/services/roofing", label: "Roofing" },
    { to: "/services/flooring", label: "Flooring" },
    { to: "/services/basement-finishing", label: "Basement Finishing" },
];

const companyLinks = [
    { to: "/", label: "Home" },
    { to: "/#process", label: "Our Process" },
    { to: "/#reviews", label: "Reviews" },
    { to: "/#areas", label: "Service Areas" },
    { to: "/contact", label: "Free Estimate" },
];

export function Footer() {
    return (
        <footer className="bg-[#030A15] pt-11 pb-5 px-[6%] border-t border-gline">
            <div className="max-w-[1180px] mx-auto">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-8 max-[780px]:grid-cols-2 max-[440px]:grid-cols-1">
                    {/* Brand */}
                    <div>
                        <div className="text-[1.18rem] font-black text-white">
                            LC <span className="text-ice">Quality</span> Improvements
                        </div>
                        <p className="text-[0.81rem] text-muted my-3 leading-[1.7]">
                            Trusted home improvement contractor serving Centereach and all of Long Island since 2012.
                            Licensed, insured, and committed to quality on every job.
                        </p>
                        <div className="flex gap-[0.65rem]">
                            {["facebook-f", "instagram", "google", "houzz"].map((icon) => (
                                <a
                                    key={icon}
                                    href="#"
                                    className="w-9 h-9 rounded-[9px] bg-glass border border-gline flex items-center justify-center text-muted text-[0.88rem] transition-colors hover:bg-blue hover:text-white"
                                    aria-label={icon}
                                >
                                    <i className={`fab fa-${icon}`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[0.78rem] font-black text-white uppercase tracking-wider mb-[0.9rem]">
                            Services
                        </h4>
                        <ul className="list-none">
                            {serviceLinks.map((link) => (
                                <li key={link.to} className="mb-[0.45rem]">
                                    <Link to={link.to} className="text-muted text-[0.82rem] transition-colors hover:text-ice">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[0.78rem] font-black text-white uppercase tracking-wider mb-[0.9rem]">
                            Company
                        </h4>
                        <ul className="list-none">
                            {companyLinks.map((link) => (
                                <li key={link.to} className="mb-[0.45rem]">
                                    <Link to={link.to} className="text-muted text-[0.82rem] transition-colors hover:text-ice">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[0.78rem] font-black text-white uppercase tracking-wider mb-[0.9rem]">
                            Contact
                        </h4>
                        <ul className="list-none">
                            <li className="mb-[0.45rem]">
                                <a href="tel:6311112222" className="text-muted text-[0.82rem] transition-colors hover:text-ice">
                                    631-111-2222
                                </a>
                            </li>
                            <li className="mb-[0.45rem]">
                                <a href="mailto:info@lcqualityimprovements.com" className="text-muted text-[0.82rem] transition-colors hover:text-ice">
                                    info@lcqualityimprovements.com
                                </a>
                            </li>
                            <li className="mb-[0.45rem]">
                                <span className="text-muted text-[0.82rem]">14 Maple St, Centereach, NY 11720</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-5 flex justify-between items-center flex-wrap gap-3">
                    <p className="text-[0.75rem] text-muted">
                        © 2026 LC Quality Improvements. All rights reserved. | Licensed & Insured in New York State
                    </p>
                    <div className="flex gap-[0.7rem] flex-wrap">
                        {["🛡️ Licensed", "✔ Insured", "⭐ 5-Star", "📍 Long Island"].map((badge) => (
                            <span
                                key={badge}
                                className="bg-glass border border-gline px-[0.7rem] py-1 rounded-[6px] text-[0.7rem] text-muted font-extrabold"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
