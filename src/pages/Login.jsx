import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen bg-linear-190 from-black via-(--primary-color) to-black flex justify-center items-center px-8 sm:py-5">
      <div className="bg-(--secondary-color) w-full h-auto text-white py-10 px-5 rounded-2xl sm:w-[70%] lg:w-[40%]">

        {/* Div em que tem a descrição e o nome do app */}
        <div className="flex flex-col items-center mb-10">
          <span className="bg-(--primary-color) p-5 rounded-xl shadow-[0_8px_12px_rgba(124,58,237,0.5)] mb-2">
            <i className="fa-solid fa-bolt text-3xl"></i>
          </span>
          <h1 className="font-bold text-4xl text-(--primary-color)/75">NEON</h1>
          <p className="text-gray-300 text-sm">Step into the digital sanctuary - Login screen</p>
        </div>

        {/* Div que fica os campos pro usuário */}
        <form action='' className="space-y-5">
          {/* campo 1 */}
          <div>
            <label className="text-(--primary-color) text-sm">IDENTIFIER</label>
            {/* Dentro do campo input */}
            <div className="relative flex items-center">
              <i className="absolute left-2 fa-solid fa-user text-white/70 has-[+input:focus]:text-(--primary-color) transition-all"></i>
              <input type="text" placeholder="username" className="outline-none w-full bg-white/10 py-2 pl-8 pr-2 rounded-md border border-(--primary-color)/30" />
            </div>
          </div>

          <div>
            <label className="text-(--primary-color) text-sm">ACCESS KEY</label>
            {/* Dentro do campo input */}
            <div className="relative flex items-center">
              <i className="absolute left-2 fa-solid fa-lock text-white/70 has-[+input:focus]:text-(--primary-color)"></i>
              <input type={`${showPassword ? 'text' : 'password'}`} placeholder="username" className="outline-none w-full bg-white/10 py-2 pl-8 pr-8 rounded-md border border-(--primary-color)/30" />
              <i className={`${showPassword ? 'fa-regular fa-eye-slash' : 'fa-solid fa-eye'} absolute right-2 cursor-pointer text-white/70`} onClick={() => setShowPassword(!showPassword)}></i>
            </div>
          </div>

          <button type="submit" className="bg-gradient-to-r from-(--primary-color) to-(--primary-color)/30 w-full p-2 cursor-pointer rounded-md hover:scale-105 transition-all">
            Login
          </button>

          <div className="flex justify-between items-center">
            <hr className="w-15 sm:w-30 border-gray-400" />
            <span className="text-sm">
              OR CONNECT VIA
            </span>
            <hr className="w-15 sm:w-30 border-gray-400" />
          </div>

          {/* Connect via */}
          <div className="flex gap-5">
            <div className="flex-1 space-x-2 cursor-pointer border border-(--primary-color)/100 p-2 bg-gray-500/20 rounded-md hover:bg-gradient-to-r hover:from-(--primary-color) hover:to-(--primary-color)/30">
              <i class="fa-brands fa-google"></i>
              <span className="text-sm">Google</span>
            </div>
            <div className="flex-1 space-x-2 cursor-pointer border border-(--primary-color)/100 p-2 bg-gray-500/20 rounded-md hover:bg-gradient-to-r hover:from-(--primary-color) hover:to-(--primary-color)/30">
              <i class="fa-brands fa-github"></i>
              <span className="text-sm">Github</span>
            </div>
          </div>

          {/* Create a account */}
          <p className="">New to the sanctuary? <Link to='/' className="text-[#2DD4BF] underline">Create account</Link></p>
        </form>
      </div>
    </div>
  );
}