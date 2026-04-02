import { Link } from "react-router-dom";

interface BreadcrumbItem {
    label: string;
    to?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="bg-[rgba(255,255,255,0.03)] border-b border-gline py-3 px-[6%] mt-[68px]">
            <div className="max-w-[1160px] mx-auto flex items-center gap-2 text-[0.78rem] text-muted">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-2">
                        {i > 0 && <i className="fas fa-chevron-right text-[0.6rem]" />}
                        {item.to ? (
                            <Link to={item.to} className="text-muted transition-colors hover:text-ice">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-ice">{item.label}</span>
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
}
