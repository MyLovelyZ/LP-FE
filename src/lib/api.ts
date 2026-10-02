// Alamat API Laravel. Menggunakan relative /api agar diteruskan lewat proxy Vite secara mulus.
export const API_URL = (import.meta.env.VITE_API_URL ?? "/api").replace(/\/+$/, "");

const TOKEN_KEY = "admin_token";

// Error dari API. errors = pesan validasi per isian (status 422), contoh { title: ["Judul wajib diisi."] }
export class ApiError extends Error {
    readonly status: number;
    readonly errors: Record<string, string[]>;

    constructor(status: number, message: string, errors: Record<string, string[]> = {}) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.errors = errors;
    }
}

// Bentuk respons Laravel API Resource
export type Resource<T> = { data: T };

export type Paginated<T> = {
    data: T[];
    meta: { current_page: number; last_page: number; per_page: number; total: number; from: number | null; to: number | null };
};

// Token Sanctum panel admin disimpan di localStorage supaya tetap masuk setelah halaman dimuat ulang.
// try/catch: localStorage bisa diblokir browser (mode privat tertentu)
export function getToken(): string | null {
    try {
        return localStorage.getItem(TOKEN_KEY);
    } catch {
        return null;
    }
}

export function setToken(token: string | null) {
    try {
        if (token) localStorage.setItem(TOKEN_KEY, token);
        else localStorage.removeItem(TOKEN_KEY);
    } catch {
        // Tidak bisa disimpan, admin cukup masuk ulang setelah memuat ulang halaman
    }
}

// Dipanggil saat token admin ditolak server (kedaluwarsa / dicabut), supaya panel admin kembali ke halaman masuk
const unauthorizedListeners = new Set<() => void>();

export function onUnauthorized(listener: () => void) {
    unauthorizedListeners.add(listener);
    return () => {
        unauthorizedListeners.delete(listener);
    };
}

const statusMessages: Record<number, string> = {
    403: "Anda tidak punya akses untuk melakukan ini.",
    404: "Data tidak ditemukan. Mungkin sudah dihapus.",
    413: "Ukuran berkas terlalu besar untuk diunggah.",
    419: "Sesi berakhir. Silakan muat ulang halaman.",
    429: "Terlalu banyak percobaan. Tunggu sebentar lalu coba lagi.",
};

type RequestOptions = {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    // FormData dikirim apa adanya (untuk unggah foto), selain itu dikirim sebagai JSON
    body?: FormData | object;
    signal?: AbortSignal;
};

// path relatif terhadap API_URL, contoh "/news?limit=6". Token admin hanya dikirim ke endpoint /admin
export async function apiRequest<T>(path: string, { method = "GET", body, signal }: RequestOptions = {}): Promise<T> {
    const headers: Record<string, string> = { Accept: "application/json" };
    const token = path.startsWith("/admin") ? getToken() : null;
    if (token) headers.Authorization = `Bearer ${token}`;

    let payload: BodyInit | undefined;
    if (body instanceof FormData) {
        payload = body;
    } else if (body !== undefined) {
        headers["Content-Type"] = "application/json";
        payload = JSON.stringify(body);
    }

    let response: Response;
    try {
        response = await fetch(`${API_URL}${path}`, { method, headers, body: payload, signal });
    } catch (error) {
        if (signal?.aborted) throw error;
        console.error("API Request Failed:", { path, url: `${API_URL}${path}`, error });
        throw new ApiError(0, "Tidak dapat terhubung ke server. Periksa koneksi internet Anda lalu coba lagi.");
    }

    if (response.status === 204) return undefined as T;

    let data: any = null;
    try {
        data = await response.json();
    } catch (parseError) {
        console.error("Failed to parse JSON response:", parseError);
    }

    if (!response.ok) {
        if (response.status === 401 && token) unauthorizedListeners.forEach((listener) => listener());

        const message = response.status === 422 && data?.message
            ? data.message
            : statusMessages[response.status] ?? (response.status === 401 ? "Sesi Anda berakhir. Silakan masuk kembali." : "Terjadi kesalahan pada server. Coba lagi nanti.");
        throw new ApiError(response.status, message, data?.errors ?? {});
    }

    return data as T;
}
