import { Link } from "react-router-dom";

interface CtaBandProps {
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryTo?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

export function CtaBand({
    title = "Ready to Start Your Project?",
    description = "Get your free, no-obligation estimate today. We'll come to you anywhere on Long Island.",
    primaryLabel = "Request Free Estimate",
    primaryTo = "/contact",
    secondaryLabel = "Call 631-111-2222",
    secondaryHref = "tel:6311112222",
}: CtaBandProps) {
    return (
        <section className="bg-gradient-to-br from-[#0B1E40] via-blue to-ice py-[4.5rem] px-[6%] text-center relative overflow-hidden">
            <div className="absolute -top-[120px] -left-[120px] w-[360px] h-[360px] rounded-full bg-[rgba(255,255,255,0.06)]" />
            <div className="absolute -bottom-[80px] -right-[80px] w-[280px] h-[280px] rounded-full bg-[rgba(255,255,255,0.06)]" />

            <div className="max-w-[1160px] mx-auto relative z-10">
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white tracking-[-1px] mb-4">
                    {title}
                </h2>
                <p className="text-[1.05rem] text-white/80 max-w-[500px] mx-auto mb-8 leading-[1.72]">
                    {description}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link to={primaryTo} className="btn-white">
                        <i className="fas fa-clipboard-check" /> {primaryLabel}
                    </Link>
                    <a href={secondaryHref} className="btn-outline-w">
                        <i className="fas fa-phone" /> {secondaryLabel}
                    </a>
                </div>
            </div>
        </section>
    );
}
