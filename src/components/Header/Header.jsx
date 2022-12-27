import React from "react";
import { CiShop } from "react-icons/ci";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBoxArrowInRight } from "react-icons/bs";

const Header = () => {
  return (
    <header class="shadow-md sticky top-0 bg-white z-10">
      <div class="mx-auto w-[444px] p-4">
        <div className="mt-3">
          <p className="flex text-[10px] font-medium mb-2">
            Kamu berbelanja di
          </p>
          <div class="flex justify-between">
            <div className="flex flex-row gap-3">
              <CiShop />
              <h3 className="text-[12px] font-bold">Kedai 5</h3>
            </div>
            <div className="flex flex-row gap-1 items-center cursor-pointer">
              <a className="text-[12px] font-bold text-blue-500 ">Ubah</a>
              <BsBoxArrowInRight className="text-blue-500 " />
            </div>
          </div>
          <div class="relative w-full mt-5">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <BiSearchAlt2 />
            </div>
            <input
              type="text"
              id="voice-search"
              class="bg-gray-50 rounded-full text-gray-900 text-sm p- focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari produk  "
              required=""
            />
            <button
              type="button"
              class="flex absolute inset-y-0 right-0 items-center pr-3"
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;