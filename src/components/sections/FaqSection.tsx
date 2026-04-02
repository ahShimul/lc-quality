import { useState } from "react";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    items: FaqItem[];
}

export function FaqSection({
    eyebrow = "FAQ",
    title = "Frequently Asked Questions",
    subtitle,
    items,
}: FaqSectionProps) {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section className="py-20 px-[6%] bg-navy">
            <div className="max-w-[1160px] mx-auto">
                <div className="text-center mb-11">
                    <div className="inline-block text-ice text-[0.72rem] font-extrabold tracking-[2px] uppercase mb-2">
                        {eyebrow}
                    </div>
                    <h2 className="text-[clamp(1.75rem,3.5vw,2.65rem)] font-black text-white tracking-[-1px] leading-[1.14] mb-3">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-muted text-[0.96rem] leading-[1.75] max-w-[560px] mx-auto">{subtitle}</p>
                    )}
                </div>

                <div className="max-w-[780px] mx-auto">
                    {items.map((item, idx) => (
                        <div key={idx} className="border-b border-gline">
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full bg-none border-none text-white font-bold text-[0.95rem] text-left py-5 cursor-pointer flex justify-between items-center gap-4"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                {item.question}
                                <i
                                    className={`fas fa-plus text-ice transition-transform duration-300 shrink-0 ${openIdx === idx ? "rotate-45" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-400 ${openIdx === idx ? "max-h-[220px]" : "max-h-0"
                                    }`}
                            >
                                <p className="text-[0.87rem] text-muted leading-[1.75] pb-5">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
