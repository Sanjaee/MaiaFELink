import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import axios from "axios";

const VerifyPage = () => {
  const email = Cookies.get("email");

  const resendVerificationEmail = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/send-verification-email`,
        { email }
      );
      if (response.status === 200) {
        alert("New verification email sent successfully!");
      } else {
        alert("Failed to resend verification email. Please try again later.");
      }
    } catch (error) {
      console.error("Failed to resend verification email:", error);
      alert("Failed to resend verification email. Please try again later.");
    }
  };

  return (
    <>
      <Navbar>
        <div className="flex items-center gap-3 ">
          <Link
            className="px-2 py-2 text-[14px] rounded-[4px] text-[#000000] font-bold "
            to={"/"}
          >
            Log In
          </Link>
          <Link
            className="px-2 py-2 text-[14px] rounded-[4px] text-[#FFFFFF] font-bold bg-[#336FF9]"
            to={"/register"}
          >
            Sign Up
          </Link>
        </div>
      </Navbar>
      <div className="flex items-center justify-center mt-20 mx-4 ">
        <div className="flex flex-col">
          <h1 className="text-[24px] text-[#2F2F2F] font-bold">
            Verify Your Email to Get Started
          </h1>
          <div className="max-w-[510px] w-full py-4 pl-4 pr-20 rounded-lg bg-[#FFFFFF] mt-10">
            <p className="text-[#79889D]">
              A confirmation link has been sent to your email address{" "}
              <span className="font-bold">{email}</span>. Enter the OTP code to
              verify your account and unlock full access.
            </p>
            <button
              onClick={resendVerificationEmail}
              className="mt-4 px-4 py-2 bg-[#336FF9] text-white rounded-md cursor-pointer hover:bg-[#1e4bb1] focus:outline-none"
            >
              Resend Verification Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyPage;
