import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md sticky top-0 bg-white z-10">
      <div className="mx-auto w-[444px] p-2">
        <div className="flex justify-start text-start font-medium items-center gap-4">
          <Link to="/">
            <IoIosArrowBack className="text-2xl hover:bg-slate-100 hover:rounded-full cursor-pointer text-primary" />
          </Link>
          <p className="text-[12px]">Masuk Akun</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
