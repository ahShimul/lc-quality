import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: Props) {
  return (
    <nav className="bg-bg border-b border-line py-3 px-[5%]">
      <div className="max-w-[1320px] mx-auto flex items-center gap-2">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-[11px] text-line">/</span>}
            {item.to ? (
              <Link
                to={item.to}
                className="mono text-[11px] tracking-[0.08em] text-muted hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="mono text-[11px] tracking-[0.08em] text-ink-2">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
