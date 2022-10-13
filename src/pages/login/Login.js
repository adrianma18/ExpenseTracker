import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto my-[60px] p-[20px]">
        <h2 className="font-extrabold text-xl">Login</h2>
        <label className="block mx-auto my-[30px]">
          <span className="block mb-[6px]">email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="py-[8px] px-[6px] text-black w-full border-black border rounded"
          />
        </label>
        <label className="block mx-auto my-[30px]">
          <span className="block mb-[6px]">password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="py-[8px] px-[6px] text-black w-full border-black border rounded"
          />
        </label>
        {!isPending && (
          <button className="border-blue-600 border-2 px-[6px] py-[6px] rounded font-bold cursor-pointer hover:bg-blue-600 hover:text-white">
            Login
          </button>
        )}
        {isPending && (
          <button
            disabled
            className="border-blue-600 border-2 px-[6px] py-[6px] rounded font-bold cursor-pointer hover:bg-blue-600 hover:text-white">
            Loading
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default Login;
