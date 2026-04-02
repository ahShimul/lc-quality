import { useState, useRef, type MouseEvent, type TouchEvent } from "react";

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
    const sliderRef = useRef<HTMLDivElement>(null);
    const dragging = useRef(false);

    const updatePosition = (clientX: number) => {
        const el = sliderRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const p = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 0), 100);
        setPosition(p);
    };

    const handleMouseDown = (e: MouseEvent) => {
        dragging.current = true;
        updatePosition(e.clientX);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (dragging.current) updatePosition(e.clientX);
    };

    const handleMouseUp = () => {
        dragging.current = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
        dragging.current = true;
        updatePosition(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (dragging.current) updatePosition(e.touches[0].clientX);
    };

    return (
        <div className="rounded-3xl overflow-hidden border border-gline shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
            <div
                ref={sliderRef}
                className="relative h-[220px] overflow-hidden cursor-ew-resize select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
            >
                {/* Before */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src={beforeSrc}
                        alt={beforeAlt}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale brightness-[0.55]"
                    />
                </div>
                {/* After */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                >
                    <img src={afterSrc} alt={afterAlt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                {/* Divider */}
                <div
                    className="absolute top-0 h-full w-0.5 bg-white z-10 pointer-events-none -translate-x-1/2"
                    style={{ left: `${position}%` }}
                >
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-blue2 rounded-full px-[0.65rem] py-1 text-[0.65rem] font-black whitespace-nowrap shadow-[0_4px_14px_rgba(0,0,0,0.4)] tracking-widest">
                        ⟨ ⟩
                    </span>
                </div>
            </div>

            {/* Labels */}
            <div className="flex justify-between px-4 py-[0.65rem] bg-glass">
                <span className="text-[0.7rem] font-extrabold px-[0.65rem] py-1 rounded-full bg-[rgba(255,255,255,0.1)] text-muted tracking-wider">
                    BEFORE
                </span>
                <span className="text-[0.7rem] font-extrabold px-[0.65rem] py-1 rounded-full bg-[rgba(0,176,255,0.15)] text-ice tracking-wider">
                    AFTER ✦
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
