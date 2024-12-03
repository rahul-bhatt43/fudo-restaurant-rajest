// login.jsx

import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firbase/Firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate()
  const cartRef = useRef(null)

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setSuccess("Login successful! Welcome back " + userCredential.user.email);
      console.log("User  logged in:", userCredential.user);
    } catch (error) {
      setError(error.message);
      alert('Incorrect Crenditial. Please type correct Email && Password')
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
        inset-0 drop-shadow-md  opacity-90  w-[100vw] h-[80vh] md:h-[100vh] 
        flex justify-center flex-col
        items-center"
    >
      <div className="border w-[90vw] lg:w-[35%] md:w-[80vw]  bg-white  p-6 space-y-4">
       
        <h2 className="text-[1.9rem] text-[#333] font-bold  tracking-wider">
          Login Form
        </h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <div className="">
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
                 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700
                       bg-red-500 text-white 
                 text-[1.4rem]"
          >
            Login
          </button>
          <p className="text-black text-[1rem] md:text-[1.2rem] text-center">
            Create an account?
            <span onClick={()=>navigate('/signup')}
              className="text-red-500 text-[1.2rem] md:text-[1.4rem] 
                     font-semibold
                     cursor-pointer"
            >
              {" "}
              Singup now
            </span>
          </p>
        </form>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default Login;
