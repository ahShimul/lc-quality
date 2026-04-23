import { useState } from "react";

interface SliderProps {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt?: string;
    afterAlt?: string;
    title: string;
    description: string;
}

export function BeforeAfterSlider({
    beforeSrc,
    afterSrc,
    beforeAlt = "Before",
    afterAlt = "After",
    title,
    description,
}: SliderProps) {
    const [position, setPosition] = useState(50);

    return (
        <div className="rounded-3xl overflow-hidden border border-gline shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
            <div
                className="relative h-[220px] overflow-hidden select-none"
            >
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={position}
                    onChange={(e) => setPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0"
                    aria-label="Before/After Slider"
                />

                {/* Before */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <img
                        src={beforeSrc}
                        alt={beforeAlt}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale brightness-[0.55]"
                    />
                </div>
                {/* After */}
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                >
                    <img src={afterSrc} alt={afterAlt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                {/* Divider */}
                <div
                    className="absolute top-0 h-full w-0.5 bg-white z-10 pointer-events-none -translate-x-1/2"
                    style={{ left: `${position}%` }}
                >
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-blue2 rounded-full px-[0.65rem] py-1 text-[0.65rem] font-black whitespace-nowrap shadow-[0_4px_14px_rgba(0,0,0,0.4)] tracking-widest pointer-events-none">
                        ⟨ ⟩
                    </span>
                </div>
            </div>

            {/* Labels */}
            <div className="flex justify-between px-4 py-[0.65rem] bg-glass">
                <span className="text-[0.7rem] font-extrabold px-[0.65rem] py-1 rounded-full bg-[rgba(255,255,255,0.1)] text-muted tracking-wider">
                    AFTER ✦                </span>
                <span className="text-[0.7rem] font-extrabold px-[0.65rem] py-1 rounded-full bg-[rgba(0,176,255,0.15)] text-ice tracking-wider">
                    BEFORE

                </span>
            </div>

            {/* Caption */}
            <div className="px-5 py-[0.9rem] bg-[rgba(255,255,255,0.04)]">
                <h4 className="text-[0.92rem] font-extrabold text-white">{title}</h4>
                <p className="text-[0.76rem] text-muted mt-1">{description}</p>
            </div>
        </div>
    );
}
