interface TrustChip {
    icon: string;
    text: string;
    highlight?: boolean;
}

interface TrustStripProps {
    chips: TrustChip[];
}

export function TrustStrip({ chips }: TrustStripProps) {
    return (
        <div className="bg-navy2 py-[1.6rem] px-[6%] border-b border-gline">
            <div className="max-w-[1160px] mx-auto flex flex-wrap gap-[0.9rem] items-center justify-center">
                {chips.map((chip, i) => (
                    <div
                        key={i}
                        className={`
              inline-flex items-center gap-2 px-[0.95rem] py-2 rounded-full
              text-[0.8rem] font-bold border
              ${chip.highlight
                                ? "border-[rgba(0,230,118,0.4)] text-good"
                                : "bg-[rgba(255,255,255,0.04)] border-gline text-text"
                            }
            `}
                    >
                        <i className={`fas fa-${chip.icon} ${chip.highlight ? "text-good" : "text-ice"}`} />
                        {chip.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
