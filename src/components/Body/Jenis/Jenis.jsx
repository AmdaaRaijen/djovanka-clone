import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import Pilihan from "./Prouduk/Pilihan";

const Jenis = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <div className="mt-1 mb-1 bg-white w-[99%] rounded-md shadow-md p-2 ">
        <div className="flex items-start justify-start mb-2">
          <p className="font-bold ">Jenis</p>
        </div>
        <div className="flex flex-row items-center ">
          <div className="flex flex-col justify-start items-start">
            <div className="rounded-lg shadow-lg border-[1px] border-slate-400 w-max h-max p-1 ">
              <IoFastFoodOutline className="w-6 h-6 " />
            </div>
            <div className="max-w-[100px] text-center">
              <p className="font-medium text-[10px] max-w-[40px]">
                Semua Prouduk
              </p>
            </div>
          </div>
        </div>
        <Pilihan />
      </div>
    </div>
  );
};

export default Jenis;
