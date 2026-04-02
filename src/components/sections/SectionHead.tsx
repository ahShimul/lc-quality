interface SectionHeadProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
    center?: boolean;
}

export function SectionHead({ eyebrow, title, subtitle, center = false }: SectionHeadProps) {
    return (
        <div className={`mb-11 ${center ? "text-center" : ""}`}>
            <div className="inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2">
                {eyebrow}
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className={`text-muted text-[0.96rem] leading-[1.75] max-w-[560px] ${center ? "mx-auto" : ""}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
