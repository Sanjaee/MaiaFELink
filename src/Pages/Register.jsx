import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import Navbar from "../components/Navbar";

const FormRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isContains, setIsContains] = useState(false);
  const [isIncludes, setIsIncludes] = useState(false);
  const [isContainsNumbers, setIsContainsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const registerUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
        {
          username: username,
          email: email,
          password: password,
        }
      );
      Cookies.set("email", email, { expires: 7 });
      Cookies.set("username", username, { expires: 7 });

      // If successful, redirect to the validation page or show a success message
      window.location.href = "/validasi";
    } catch (error) {
      // Handle errors
      if (error.response && error.response.status === 400) {
        // Email already exists in the database, show an error message
        setIsEmail(true);
      } else {
        // Handle other errors
        console.error("Error:", error);
      }
    } finally {
      setIsLoading(false); // Set isLoading to false after the registration process is completed
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (username === "" || email === "" || password === "") {
      // If username, email, or password is empty, do not proceed with registration
      return;
    }
    // Call the registerUser function
    await registerUser();
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsContains(newPassword.length >= 8);
    setIsIncludes(/[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword));
    setIsContainsNumbers(/\d/.test(newPassword));
    setIsSymbols(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newPassword));
  };

  return (
    <>
      <Navbar>
        <div className="flex items-center gap-3">
          <Link
            className="px-2 py-2 text-[14px] rounded-[4px] text-[#000000] font-bold"
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

      <div className="flex items-center justify-center px-4">
        <form
          className="flex flex-col justify-end w-[400px]"
          onSubmit={handleRegister}
        >
          <h1 className="text-[24px] text-[#2F2F2F] font-semibold mt-20">
            Sign up to Maia
          </h1>
          <div className="flex flex-col mt-6">
            <label
              htmlFor="username"
              className="text-[14px] mb-1 text-[#2F2F2F] font-semibold"
            >
              Your Name
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="px-3 font-semibold rounded-lg bg-[#FFFFFF] focus:outline-none max-w-[400px] h-[40px] border-[#CBD5E1]"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label
              htmlFor="email"
              className="text-[14px] mb-1 text-[#2F2F2F] font-semibold"
            >
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="px-3 font-semibold rounded-lg bg-[#FFFFFF] focus:outline-none max-w-[400px] h-[40px] border-[#CBD5E1]"
              placeholder="Email"
            />
          </div>

          {isEmail && (
            <div className="mt-6 py-3 pl-3 pr-7 rounded max-w-[400px] w-full bg-[#FFF5F5]">
              <p className="text-[14px] text-[#79889D]">
                Oops! It seems this email is already in use. Please try another
                email address or sign in with your existing account
              </p>
            </div>
          )}

          <div className="flex flex-col mt-6">
            <label
              htmlFor="password"
              className="text-[14px] mb-1 text-[#2F2F2F] font-semibold"
            >
              Create Password
            </label>
            <input
              value={password}
              onChange={handlePasswordChange}
              type="text"
              className="px-3 font-semibold rounded-lg bg-[#FFFFFF] focus:outline-none max-w-[400px] h-[40px] border-[#CBD5E1]"
              placeholder="Password"
            />
          </div>

          <div
            className={`mt-6 py-3 pl-3 pr-7 rounded max-w-[400px] w-full ${
              !isSymbols || !isContains || !isIncludes || !isContainsNumbers
                ? "bg-[#FFF5F5]"
                : "bg-[#FFFFFF]"
            }`}
          >
            <div className="flex items-center">
              {isContains ? (
                <img className="w-[15px]" src="Vector.png" alt="" />
              ) : (
                <span className="w-[16px] h-[16px] bg-[#FFF5F5] rounded-full border-2 border-[#CBD5E1]"></span>
              )}
              <p className="ml-2 text-[14px] text-[#79889D]">
                Contains at least 8 characters
              </p>
            </div>
            <div className="flex items-center">
              {isIncludes ? (
                <img className="w-[15px]" src="Vector.png" alt="" />
              ) : (
                <span className="w-[16px] h-[16px] bg-[#FFF5F5] rounded-full border-2 border-[#CBD5E1]"></span>
              )}
              <p className="ml-2 text-[14px] text-[#79889D]">
                Includes both uppercase and lowercase letters
              </p>
            </div>
            <div className="flex items-center">
              {isContainsNumbers ? (
                <img className="w-[15px]" src="Vector.png" alt="" />
              ) : (
                <span className="w-[16px] h-[16px] bg-[#FFF5F5] rounded-full border-2 border-[#CBD5E1]"></span>
              )}
              <p className="ml-2 text-[14px] text-[#79889D]">
                Contains numbers (e.g., 1, 2, 3)
              </p>
            </div>
            <div className="flex items-center">
              {isSymbols ? (
                <img className="w-[15px]" src="Vector.png" alt="" />
              ) : (
                <span className="w-[16px] h-[16px] bg-[#FFF5F5] rounded-full border-2 border-[#CBD5E1]"></span>
              )}
              <p className="ml-2 text-[14px] text-[#79889D]">
                Includes symbols (e.g., @, #, $)
              </p>
            </div>
          </div>

          <button
            disabled={isLoading}
            className="bg-[#2F2F2F] hover:bg-[#454545] text-white font-bold py-2 w-full px-4 rounded mt-6"
            onClick={handleRegister}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
          <p className="text-center text-[14px] text-[#2F2F2F] mt-6 font-semibold">
            By creating an account you agree with our{" "}
            <span className="underline">
              Terms of Service and Privacy Policy
            </span>
          </p>

          <p className="mb-10 text-center text-[14px] text-[#2F2F2F] mt-6 font-semibold">
            Already have an account?{" "}
            <Link className="underline" to={"/"}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default FormRegister;
