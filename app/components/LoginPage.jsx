"use client"

import { useState } from 'react';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <img className="w-[240px] h-50" src="./Images/facebookLogo.svg" alt="Facebook Logo" />
      </div>

      <div className="border-2 rounded-lg p-5 w-[396px] bg-white shadow-lg">
        <div>
          <h1 className="text-md font-normal text-center mb-4">Log Into Facebook</h1>
        </div>

        <form className="max-w-md space-y-4">
          <div className="mx-auto">
            <div className="relative">
              <input
                type="email"
                className="w-full h-[50px] rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm border-[1.5px]"
                placeholder="Email or phone number"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full h-[50px] rounded-lg border-[1.5px] border-gray-200 p-4 text-lg"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {password && showPassword && (
                <img
                  src="./Images/showPassword.png"
                  alt="Hide Password"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
              {password && !showPassword && (
                <img
                  src="./Images/noShowPassword.png"
                  alt="Show Password"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#1877f2] p-3 w-full text-xl font-semibold mx-auto text-white"
          >
            Log In
          </button>

          <a href="https://www.youtube.com/" className="flex flex-row justify-center text-[#1a77f2] text-sm font-medium hover:underline">
            Forgot account?
          </a>

          <p className="flex items-center">
            <span className="flex-grow h-px bg-[#d8dade] mx-2"></span>
            <p className="text-[#97999f] text-sm">or</p>
            <span className="flex-grow h-px bg-[#d8dade] mx-2"></span>
          </p>

          <div className="flex flex-row justify-center">
            <button className="bg-[#42b72a] hover:bg-[#1f9d20] text-[15px] p-3 w-1/2 text-white rounded font-bold">
              Create new account
            </button>
          </div>
        </form>
      </div>

    <footer className="flex justify-center bg-white mt-auto h-20 w-screen">
        <div className="flex flex-row justify-around items-center w-[265px] ">
            <a href="https://github.com/superxp360/facebook-login" className="m-5"
            target='_blank'>
            <img className='h-8' src="Images/githubLogo.png" alt="No Show Password" />
            </a>

            <p className='m-2 text-gray-500'>See code on GitHub!</p>
        </div>
    </footer>
    </div>
  );
}