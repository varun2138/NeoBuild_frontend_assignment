import React, { useState } from "react";
import { SlGlobe } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useGlobal } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const { setUser } = useGlobal();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "naval.ravikant" && password === "05111974") {
      const userData = { username };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("user logged in successfully");
      navigate("/booking");
    } else {
      toast.error("Invalid credentials");
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div className="  w-full h-screen flex justify-center items-center ">
      <div className="bg-black text-white w-1/2 sm:w-1/3 py-6  flex flex-col gap-6 rounded-md">
        <div className="flex justify-center items-center gap-3  ">
          <SlGlobe fontSize={30} />
          <p className="text-xl">Almanack</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2"
        >
          <div className="px-2  w-3/4 h-10  rounded-md overflow-hidden flex  items-center gap-2 bg-white">
            <FaUser className="text-black " />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text "
              className="w-full h-full text-black  px-1 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="px-2  w-3/4 h-10  rounded-md overflow-hidden flex  items-center gap-2 bg-white">
            <RiLockPasswordFill className="text-black " />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text "
              className="w-full h-full text-black  px-1 outline-none"
              placeholder="Enter you password"
            />
          </div>

          <button
            type="submit"
            className="bg-white  w-3/4 mt-6 py-1.5 rounded-md text-black font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
