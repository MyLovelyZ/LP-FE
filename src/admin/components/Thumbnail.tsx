import AdminIcon from "./AdminIcon";

// Foto kecil di daftar admin; ikon gambar kalau belum ada foto. className = ukuran
export default function Thumbnail({ src, className = "h-12 w-16" }: { src: string | null; className?: string }) {
    return(
        <span className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 text-slate-400 ${className}`}>
            {src ? <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" /> : <AdminIcon name="image" className="w-5 h-5" />}
        </span>
    )
}
