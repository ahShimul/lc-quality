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
    <div className="rounded-2xl overflow-hidden border border-line bg-paper">
      <div className="relative h-[220px] overflow-hidden select-none">
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
          className="absolute top-0 h-full w-[1px] bg-accent z-10 pointer-events-none -translate-x-1/2"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-bg rounded-full w-8 h-8 flex items-center justify-center text-[11px] font-bold shadow-[0_4px_14px_rgba(110,168,255,0.4)] pointer-events-none">
            ⟨⟩
          </span>
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between px-4 py-2 border-t border-line">
        <span className="mono text-[10px] tracking-[0.12em] uppercase text-muted">
          Before
        </span>
        <span className="mono text-[10px] tracking-[0.12em] uppercase text-accent">
          After ✦
        </span>
      </div>

      {/* Caption */}
      <div className="px-5 py-4 border-t border-line">
        <h4 className="text-[14px] font-semibold text-ink">{title}</h4>
        <p className="text-[12.5px] text-muted mt-1">{description}</p>
      </div>
    </div>
  );
}
