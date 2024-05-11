import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  // Signup tugmasini bosganda foydalanuvchini kirish sahifasiga olib borish
  function handleSignup() {
    navigate("/"); // Foydalanuvchi kirish sahifasiga o'tish
  }

  return (
    <div className="w-[300px] m-auto mt-10 flex flex-col gap-4">
      <h2 className="text-center font-semibold text-[25px]">Sign Up</h2>
      <p>Username</p>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Username" />
      </label>
      <p>Email</p>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <p>Password</p>
      <label className="input input-bordered flex items-center gap-2">
        <input type="password" className="grow" placeholder="***" />
      </label>

      {/* Signup tugmasini bosganda handleSignup funksiyasini chaqirish */}
      <button className="btn btn-primary" onClick={handleSignup}>
        Sign Up
      </button>
      <button className="btn btn-neutral">Google</button>
      <button className="btn bg-pink-600">I have an account</button>
    </div>
  );
}

export default Signup;
