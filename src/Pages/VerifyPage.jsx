import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";

const VerifyPage = () => {
  const email = Cookies.get("email");

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
              <span className="font-bold">{email}</span> Enter the OTP code to
              verify your account and unlock full access.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyPage;
