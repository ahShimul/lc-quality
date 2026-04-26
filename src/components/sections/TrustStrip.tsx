interface Chip {
  icon: string;
  text: string;
  highlight?: boolean;
}

interface Props {
  chips: Chip[];
}

export function TrustStrip({ chips }: Props) {
  return (
    <div className="bg-bg-2 border-y border-line py-4 px-[5%]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-8 flex-wrap">
        {chips.map((c) => (
          <div
            key={c.text}
            className="flex items-center gap-2"
          >
            <i className={`fas fa-${c.icon} text-[11px] ${c.highlight ? "text-accent" : "text-muted"}`} />
            <span className="mono text-[11px] tracking-[0.1em] uppercase text-ink-2">
              {c.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
