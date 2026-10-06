import { Link } from "react-router-dom";
import SketchFrame, { SketchArrow, SketchCorner, SketchRule } from "../SketchFrame";
import { TeacherPhoto } from "../TeacherCard";
import { kaprogOf } from "../../data/teachers";
import type { Major } from "../../data/majors";

export default function KaprogMajor({ major }: { major: Major }) {
    // Nama, jabatan, & foto kepala program diambil dari data guru, jadi cukup diganti di satu tempat
    const kaprog = kaprogOf(major.code);

    if (!kaprog || major.kaprogMessage.length === 0) return null;

    return(
        // Sama seperti section sambutan kepala sekolah di beranda
        <section className="relative z-10 bg-brand-softmist text-brand-ink px-6 py-20 md:py-28">
            <div className="max-w-6xl mx-auto grid gap-14 md:gap-16 md:grid-cols-[2fr_3fr] md:items-center">
                <div className="group relative w-full max-w-sm mx-auto md:max-w-none">
                    {/* Foto Kaprog dengan hover zoom, shadow halus & label jurusan */}
                    <div className="relative overflow-hidden rounded-card shadow-2xl transition-all duration-500 ring-1 ring-black/10 group-hover:shadow-brand-ink/20">
                        <TeacherPhoto teacher={kaprog} alt={kaprog.name} className="w-full aspect-4/5" initialsSize="text-8xl" zoom />
                        {/* Overlay gradien halus di bagian bawah foto */}
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-ink/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        <span className="absolute bottom-4 left-4 rounded-full bg-brand-ink/80 backdrop-blur-xs px-3.5 py-1 text-xs font-semibold tracking-wider text-white shadow-sm uppercase">
                            Kaprog {major.code}
                        </span>
                    </div>

                    {/* Garis siku coretan di pojok kanan atas & kiri bawah foto, sama seperti bingkai video di beranda */}
                    <SketchCorner className="-top-5 -right-5 w-16 h-16 md:-top-8 md:-right-8 md:w-28 md:h-28 rotate-90" />
                    <SketchCorner delay={350} className="-bottom-5 -left-5 w-16 h-16 md:-bottom-8 md:-left-8 md:w-28 md:h-28 -rotate-90" />
                </div>

                <div>
                    <p className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-darkred">
                        Kepala Program Keahlian
                    </p>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight text-left">
                        {/* -ml-4 md:-ml-5: teks judul tetap sejajar eyebrow di atasnya, garis sikunya yang menjorok ke kiri */}
                        <SketchFrame className="-ml-4 md:-ml-5">Sambutan Kaprog {major.code}</SketchFrame>
                    </h2>

                    <figure className="mt-8">
                        {/* Garis tegak coretan di kiri sambutan, sama seperti kutipan di halaman berita */}
                        <blockquote className="relative space-y-4 py-1 pl-8 md:pl-10">
                            <SketchRule bold vertical className="text-brand-darkred -top-1 -bottom-1 left-0 w-3" />
                            {major.kaprogMessage.map((paragraph) => (
                                <p key={paragraph} className="text-base md:text-lg leading-relaxed text-brand-ink/80">{paragraph}</p>
                            ))}
                        </blockquote>
                        <figcaption className="mt-6 pl-8 md:pl-10 text-left">
                            <span className="block font-semibold">{kaprog.name}</span>
                            <span className="text-sm text-brand-ink/60">{kaprog.role}</span>
                            <Link
                                to={`/profil-guru/${kaprog.id}`}
                                className="group mt-4 flex w-fit items-center gap-2 text-sm font-semibold text-brand-darkred"
                            >
                                Lihat Profil Lengkap
                                <SketchArrow className="w-6 h-3 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}
