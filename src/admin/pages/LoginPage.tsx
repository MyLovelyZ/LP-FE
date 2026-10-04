import { useState, type FormEvent } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/auth-context";
import AdminIcon from "../components/AdminIcon";
import Field from "../components/Field";
import Spinner from "../components/Spinner";
import { useDocumentTitle } from "../lib/format";
import { ApiError } from "../../lib/api";
import logoSekolah from "../../assets/images/logosmkpenus.png";

export default function LoginPage() {
    useDocumentTitle("Masuk Administrator");
    const { status, login } = useAuth();
    const location = useLocation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [message, setMessage] = useState<string | null>(null);

    // Kembali ke halaman yang tadi ingin dibuka sebelum diarahkan ke sini
    const from = (location.state as { from?: string } | null)?.from ?? "/admin";

    if (status === "authenticated") return <Navigate to={from} replace />;

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setErrors({});
        setMessage(null);

        try {
            await login(username.trim(), password);
        } catch (error) {
            if (error instanceof ApiError && error.status === 422) setErrors(error.errors);
            else setMessage(error instanceof ApiError ? error.message : "Gagal masuk. Coba lagi.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="bg-gradient-to-br from-[#0B1528] via-[#0F203C] to-[#1E293B] min-h-screen flex items-center justify-center p-4 font-sans text-slate-100 selection:bg-[#8B1D24] selection:text-white relative overflow-hidden">
            {/* Background glowing ambient spots */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full max-w-md relative z-10 animate-fade-up">
                {/* Logo & Brand Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl p-3 mb-4 transition-transform duration-300 hover:scale-105">
                        <img src={logoSekolah} alt="Logo Penus" className="w-full h-full object-contain drop-shadow-md" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">PANEL ADMINISTRATOR</h1>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wider mt-1 uppercase">
                        SMK PLUS PELITA NUSANTARA BOGOR
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1D24] via-amber-400 to-[#8B1D24]" />

                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-3">
                            <AdminIcon name="shieldCheck" className="w-3.5 h-3.5" />
                            <span>Akses Khusus Pengelola</span>
                        </div>
                        <h2 className="text-xl font-bold text-white">Masuk ke Sistem</h2>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1">
                            Masuk untuk mengelola berita sekolah, program kejuruan, dan fasilitas portal landing page.
                        </p>
                    </div>

                    {message && (
                        <div role="alert" className="mb-5 p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 text-xs sm:text-sm flex items-start gap-2.5">
                            <AdminIcon name="alert" className="mt-0.5 w-4 h-4 shrink-0 text-red-400" />
                            <span>{message}</span>
                        </div>
                    )}

                    <form onSubmit={submit} noValidate className="space-y-4">
                        <Field label="Username / ID Pengguna" htmlFor="username" error={errors.username?.[0]}>
                            <input
                                id="username"
                                type="text"
                                autoComplete="username"
                                required
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                aria-invalid={errors.username ? true : undefined}
                                placeholder="Contoh: admin, kepsek, tu_budi"
                                className="block w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                            />
                        </Field>

                        <Field label="Kata Sandi" htmlFor="password" error={errors.password?.[0]}>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    aria-invalid={errors.password ? true : undefined}
                                    placeholder="••••••••"
                                    className="block w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 pr-11 text-xs sm:text-sm text-white placeholder:text-slate-400 transition focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                                    aria-pressed={showPassword}
                                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:text-white transition-colors"
                                >
                                    <AdminIcon name={showPassword ? "eyeOff" : "eye"} className="w-4 h-4" />
                                </button>
                            </div>
                        </Field>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="mt-6 w-full py-3 rounded-xl bg-[#8B1D24] hover:bg-[#72151B] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-red-950/40 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {submitting && <Spinner className="w-4 h-4" label="Sedang masuk" />}
                            <span>Masuk ke Panel Admin</span>
                        </button>
                    </form>
                </div>

                <p className="mt-6 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 transition-colors hover:text-white"
                    >
                        <AdminIcon name="chevronLeft" className="w-4 h-4" />
                        Kembali ke Beranda Situs
                    </Link>
                </p>
            </div>
        </main>
    );
}
