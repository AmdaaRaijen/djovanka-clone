import React from "react";
import {
  MdOutlineMenuBook,
  MdOutlineShoppingBag,
  MdHelpOutline,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sticky bottom-0 z-50 shadow-sm bg-white w-full border">
      <div className="flex flex-row justify-center gap-20 pt-3 pb-1">
        <Link to="/" className="flex flex-col items-center text-slate-500">
          <MdOutlineMenuBook className="w-5 h-5" />
          <p className="text-[12px] font-bold">Menu</p>
        </Link>
        <Link href="/" className="flex flex-col items-center text-slate-500">
          <MdOutlineShoppingBag className="w-5 h-5" />
          <p className="text-[12px] font-bold">Transaksi</p>
        </Link>
        <Link href="/" className="flex flex-col items-center text-slate-500">
          <MdHelpOutline className="w-5 h-5" />
          <p className="text-[12px] font-bold">Bantuan</p>
        </Link>
        <Link to="/login" className="flex flex-col items-center text-slate-500">
          <CgProfile className="w-5 h-5" />
          <p className="text-[12px] font-bold">Profil</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
