import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const useVerify = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const decode = jwtDecode(cookies.token);
  const verify = decode.isVerified;

  useEffect(() => {
    if (!verify) {
      window.location.href = "/validasi";
    }
  }, [verify]);
};
