import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const VerifyEmail = () => {
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState("Verifying...");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/auth/verify/${token}`
        );
        setVerificationStatus(response.data.message);
        Cookies.set("token", response.data.token, { expires: 7 });
        window.location.href = "/dashboard";
      } catch (error) {
        setVerificationStatus("Verification failed");
      }
    };

    verifyToken();
  }, [token]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen
    "
    >
      <h1 className="text-2xl font-bold text-[#79889D]">Verification Status</h1>
      <p className="text-lg  mt-4 font-semibold ">{verificationStatus}</p>
    </div>
  );
};

export default VerifyEmail;
