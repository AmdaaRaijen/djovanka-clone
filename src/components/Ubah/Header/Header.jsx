import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Home from "../../Home/Home";

const Header = () => {
  return (
    <header className="shadow-md sticky top-0 bg-white z-10">
      <div className="mx-auto w-[444px] p-4">
        <div className="flex items-center gap-3">
          <Link to="/">
            <IoIosArrowBack className=" hover:bg-slate-100 hover:rounded-full cursor-pointer" />
          </Link>
          <p className="font-medium text-[12px]">Pilih Lokasi</p>
        </div>
        <div className="mt-3">
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 rounded-full text-gray-900 text-sm p- focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari lokasi terdekat"
            required=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
