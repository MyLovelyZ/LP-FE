import Icon, { type IconName } from "../Icon";
import SketchFrame, { SketchCorner, SketchRule } from "../SketchFrame";
import type { DevactoPhoto, Major } from "../../data/majors";

export default function DevactoWorksMajor({ major }: { major: Major }) {
    const { photos, works } = major.devacto;

    if (photos.length === 0 && works.length === 0) return null;

    return(
        <section className="relative z-10 overflow-hidden bg-white text-brand-ink px-6 py-20 md:py-28">
            <div className="relative max-w-6xl mx-auto">
                <div className="grid gap-4 md:grid-cols-2 md:items-end">
                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-darkred">
                            Kegiatan Devacto {major.code}
                        </p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold uppercase tracking-wide leading-tight text-left">
                            {/* -ml-4 md:-ml-5: teks judul tetap sejajar eyebrow di atasnya, garis sikunya yang menjorok ke kiri */}
                            <SketchFrame className="-ml-4 md:-ml-5">Dari Latihan Jadi Karya Nyata</SketchFrame>
                        </h2>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed text-brand-ink/70 md:max-w-md md:justify-self-end">
                        Sekilas suasana kegiatan Devacto dan hasil yang sudah dikerjakan bersama oleh para anggotanya.
                    </p>
                </div>

                <div className="mt-12 md:mt-16 grid gap-14 lg:gap-16 lg:grid-cols-[7fr_5fr] lg:items-start">
                    {/* Foto pertama besar selebar galeri, sisanya berjajar dua kolom di bawahnya */}
                    {photos.length > 0 && (
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {photos.map((photo, i) => (
                                    <PhotoCard key={photo.caption} photo={photo} icon={major.icon} large={i === 0} />
                                ))}
                            </div>

                            {/* Garis siku coretan di pojok kanan atas & kiri bawah galeri, sama seperti bingkai video di beranda */}
                            <SketchCorner className="-top-5 -right-5 w-16 h-16 md:-top-8 md:-right-8 md:w-28 md:h-28 rotate-90" />
                            <SketchCorner delay={350} className="-bottom-5 -left-5 w-16 h-16 md:-bottom-8 md:-left-8 md:w-28 md:h-28 -rotate-90" />
                        </div>
                    )}

                    {works.length > 0 && (
                        // text-left: kolom sempit, teks yang terbungkus jadi renggang kalau ikut justify dari body
                        <div className="text-left">
                            <h3 className="font-display text-lg font-bold uppercase tracking-wide">Hasil Karya Devacto</h3>

                            <ol className="mt-5">
                                {works.map((work, i) => (
                                    <li key={work.title} className="relative flex gap-4 py-5 first:pt-0 last:pb-0">
                                        {/* Garis pemisah coretan, pengganti divide-y */}
                                        {i > 0 && <SketchRule delay={i * 100} className="text-brand-darkred/30 -left-1 -right-1 -top-1.5 h-3" />}
                                        <span aria-hidden="true" className="w-8 shrink-0 font-display text-lg font-bold tracking-wide text-brand-darkred">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <h4 className="text-lg font-semibold">{work.title}</h4>
                                            <p className="mt-1 text-sm leading-relaxed text-brand-ink/70">{work.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

function PhotoCard({ photo, icon, large }: { photo: DevactoPhoto; icon: IconName; large: boolean }) {
    return(
        <figure className={`group relative overflow-hidden rounded-card bg-brand-ink/5 ring-1 ring-black/10 shadow-xl shadow-brand-ink/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-ink/25 ${
            large ? "col-span-2 aspect-video" : "aspect-4/3"
        }`}>
            {photo.image ? (
                // alt kosong: isi foto sudah dijelaskan oleh figcaption
                <img
                    src={photo.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                    loading="lazy"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-brand-signal to-brand-deepred text-white/15 transition-transform duration-500 group-hover:scale-110">
                    <Icon name={icon} className={large ? "w-24 h-24 md:w-28 md:h-28" : "w-12 h-12"} />
                </div>
            )}

            {/* Overlay gradien gelap untuk memastikan teks caption terbaca sangat jelas */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-ink/90 via-brand-ink/25 to-transparent transition-opacity duration-300 group-hover:from-brand-ink/95" />

            {/* Aksen garis highlight halus di atas saat kartu di-hover */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-brand-warmred to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <figcaption className={`absolute inset-x-0 bottom-0 text-left font-semibold text-white drop-shadow-sm ${
                large ? "p-4 md:p-6 text-sm md:text-base" : "p-3 md:p-4 text-xs md:text-sm"
            }`}>
                <span className="line-clamp-2">{photo.caption}</span>
            </figcaption>
        </figure>
    )
}
