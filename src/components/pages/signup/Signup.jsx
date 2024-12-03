// signup.jsx

import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firbase/Firebase"; // Adjust the import path as necessary
// import { createUser WithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate()
  const cartRef = useRef()


  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setSuccess("Signup successful! Welcome " + userCredential.user.email);
      console.log("User  created:", userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (cartRef.current) {
        cartRef.current.scrollIntoView({ behavior: 'smooth', });
    }
}, []);

  return (
    <div ref={cartRef}
      className="font-poppins
        inset-0 drop-shadow-md  opacity-90  w-[100vw] h-[80vh] md:h-[100vh] flex justify-center
        items-center"
    >
      <div className="border w-[90vw] lg:w-[35%] md:w-[80vw]  bg-white  p-6 space-y-4">
        <h2 className="text-[1.9rem] text-[#333] font-bold  tracking-wider">
          Signup Form
        </h2>
        <form onSubmit={handleSignup} className="space-y-3">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-[100%] outline-none h-[50px] shadow-md border
                       rounded-md p-5 placeholder:text-slate-400 placeholder:text-[1.2rem]  "
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-[100%] outline-none h-[50px] shadow-md border
                       rounded-md p-5 placeholder:text-slate-400 placeholder:text-[1.2rem]  "
            />
          </div>
          <button
            type="submit"
            className="w-full h-[50px] outline-none rounded-md
                 bg-red-500 text-white   hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700
           text-[1.4rem]"
          >
            Signup
          </button>
          <p className="text-black text-[1rem]  md:text-[1.2rem] text-center">
             Have an account? 
            <span onClick={()=>navigate('/login')}
              className="text-red-500 text-[1.2rem] md:text-[1.4rem] 
                     font-semibold
                     cursor-pointer"
            >
              {" "}  Login now
            </span>
          </p>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </div>
  );
};

export default Signup;
