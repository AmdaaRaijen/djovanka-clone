import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import Pilihan from "./Prouduk/Pilihan";

const Jenis = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <div className="mt-1 mb-1 bg-white w-[99%] rounded-md shadow-md p-2 ">
        <div className="flex items-start justify-start mb-2">
          <p className="font-bold text-xl">Jenis</p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col justify-start items-start">
            <div className="rounded-full border-2 border-black w-max h-max p-1 ">
              <IoFastFoodOutline className="w-8 h-8 " />
            </div>
            <div className="max-w-[100px] text-start">
              <p className="font-medium">Foody & Moody</p>
            </div>
          </div>
        </div>
        <Pilihan />
      </div>
    </div>
  );
};

export default Jenis;
