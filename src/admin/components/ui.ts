// Kelas Tailwind yang dipakai berulang di panel admin, mengikuti design system PPDB Penus

export const inputClass =
    "block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 transition focus:border-[#8B1D24] focus:outline-none focus:ring-2 focus:ring-[#8B1D24]/10 disabled:bg-slate-50";

export const buttonPrimary =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#8B1D24] hover:bg-[#72151B] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1D24] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer";

export const buttonSecondary =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E293B] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer";

export const buttonDanger =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer";

// Tombol ikon kecil di baris tabel/kartu (edit, hapus, naik, turun)
export const iconButton =
    "inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1D24] disabled:pointer-events-none disabled:opacity-30 cursor-pointer";

export const cardClass = "rounded-2xl border border-slate-200/80 bg-white shadow-sm";
