import type { NewsStatus } from "../../data/news";

const styles: Record<NewsStatus, { label: string; className: string }> = {
    published: { label: "Terbit", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    scheduled: { label: "Terjadwal", className: "bg-amber-50 text-amber-700 border-amber-200" },
    draft: { label: "Draf", className: "bg-slate-100 text-slate-600 border-slate-200" },
};

export default function StatusBadge({ status }: { status: NewsStatus }) {
    const { label, className } = styles[status];

    return(
        <span className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold border ${className}`}>
            {label}
        </span>
    )
}
