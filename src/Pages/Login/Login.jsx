import React from "react";
import Header from "./Header/Header";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[90%] flex-col gap-10 justify-center items-center">
        <div>
          <RiAccountCircleFill className="text-8xl" />
        </div>
        <div>
          <h2 className="font-semibold">Masuk</h2>
          <p className="text-[10px] max-w-[230px]">
            Nikmati kepuasan dan kenyamanan kualitas belanja kebutuhan sehari -
            hari dengan Haripanen
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <button class=" btn btn-primary bg-[#570DF8] flex flex-row gap-3 justify-between">
            <div className="bg-white rounded-lg p-1">
              <FcGoogle className="text-xl" />
            </div>
            <p className="text-[10px]">Masuk Dengan Google</p>
          </button>
          <button class=" btn btn-success bg-[#086b47] flex flex-row gap-3 justify-between hover:bg-[#05130e]">
            <div className="bg-white rounded-lg p-1">
              <AiOutlineMail className="text-xl text-[#086b47] " />
            </div>
            <p className="text-[10px] text-white">Masuk Dengan Email</p>
          </button>
        </div>
        <div className="text-slate-500 text-[10px] font-medium">
          <p>Dengan masuk dan mendaftar, Anda menyetujui</p>
          <p>
            <span className="underline cursor-pointer font-bold">
              {" "}
              Syarat Penggunaan{" "}
            </span>
            dan{" "}
            <span className="underline cursor-pointer font-bold">
              {" "}
              Kebijakan Privasi{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
