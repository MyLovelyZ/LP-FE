import { useEffect, useState, type ReactNode } from "react";
import { AuthContext, type AdminUser, type AuthStatus } from "./auth-context";
import { ApiError, apiRequest, getToken, onUnauthorized, setToken } from "../../lib/api";
import { invalidateApiCache } from "../../lib/useApi";

type LoginApiResponse = {
    success: boolean;
    message: string;
    access_token: string;
    token_type: string;
    expires_in: string;
};

type VerifyApiResponse = {
    success: boolean;
    message: string;
    data: AdminUser;
};

const ALLOWED_ADMIN_ROLES = ["ADMIN", "KEPALA_SEKOLAH", "TU"];

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AdminUser | null>(null);
    const [status, setStatus] = useState<AuthStatus>(() => (getToken() ? "checking" : "guest"));

    // Periksa token tersimpan saat panel admin dibuka
    useEffect(() => {
        const token = getToken();
        if (!token) return;

        let cancelled = false;
        apiRequest<VerifyApiResponse>("/user/verify", {
            method: "POST",
            body: { access_token: token },
        }).then(
            (response) => {
                if (cancelled) return;
                const userData = response.data;
                const role = (userData.role || "").toUpperCase();

                if (!ALLOWED_ADMIN_ROLES.includes(role)) {
                    setToken(null);
                    setUser(null);
                    setStatus("guest");
                    return;
                }

                setUser({ ...userData, name: userData.nama_lengkap || userData.username });
                setStatus("authenticated");
            },
            () => {
                if (cancelled) return;
                setToken(null);
                setUser(null);
                setStatus("guest");
            },
        );

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => onUnauthorized(() => {
        setToken(null);
        setUser(null);
        setStatus("guest");
        invalidateApiCache("/admin");
    }), []);

    const login = async (username: string, password: string) => {
        // 1. Panggil microservice login (/api/user/login)
        const loginRes = await apiRequest<LoginApiResponse>("/user/login", {
            method: "POST",
            body: { username, password },
        });

        const token = loginRes.access_token;
        setToken(token);

        try {
            // 2. Verifikasi token dan peroleh data profil pengguna
            const verifyRes = await apiRequest<VerifyApiResponse>("/user/verify", {
                method: "POST",
                body: { access_token: token },
            });

            const userData = verifyRes.data;
            const role = (userData.role || "").toUpperCase();

            // 3. Validasi hak akses role (ADMIN, KEPALA_SEKOLAH, TU)
            if (!ALLOWED_ADMIN_ROLES.includes(role)) {
                setToken(null);
                throw new ApiError(
                    403,
                    `Akses ditolak: role ${userData.role} tidak memiliki izin untuk mengakses panel administrator.`,
                );
            }

            setUser({ ...userData, name: userData.nama_lengkap || userData.username });
            setStatus("authenticated");
        } catch (error) {
            setToken(null);
            setUser(null);
            setStatus("guest");
            throw error;
        }
    };

    const logout = async () => {
        setToken(null);
        setUser(null);
        setStatus("guest");
        invalidateApiCache("/admin");
    };

    return (
        <AuthContext.Provider value={{ user, status, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
