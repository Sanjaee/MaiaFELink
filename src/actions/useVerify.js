import Cookies from "js-cookie";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const useVerify = () => {
  const decode = Cookies.get("token");
  const verify = decode.isVerified;

  useEffect(() => {
    if (!verify) {
      window.location.href = "/validasi";
    }
  }, [verify]);
};
