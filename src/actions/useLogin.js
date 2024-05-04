import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const useLogin = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const token = cookies.token;
    if (!token) {
      // Jika tidak ada token, arahkan pengguna kembali ke halaman login
      window.location.href = "/"; // Ganti dengan rute yang benar ke halaman login
    }
  }, [cookies.token]); // Memonitor perubahan pada token cookie
};
