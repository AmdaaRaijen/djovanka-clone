import React from "react";
import {
  MdOutlineMenuBook,
  MdOutlineShoppingBag,
  MdHelpOutline,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="sticky bottom-0 z-50 shadow-sm bg-white w-full border">
      <div className="flex flex-row justify-center gap-16 pt-3 pb-1">
        <a href="/" className="flex flex-col items-center">
          <MdOutlineMenuBook className="w-8 h-8" />
          Menu
        </a>
        <a href="/" className="flex flex-col items-center">
          <MdOutlineShoppingBag className="w-8 h-8" />
          Transaksi
        </a>
        <a href="/" className="flex flex-col items-center">
          <MdHelpOutline className="w-8 h-8" />
          <a href="/">Bantuan</a>
        </a>
        <a href="/" className="flex flex-col items-center">
          <CgProfile className="w-8 h-8" />
          <a href="/">Profil</a>
        </a>
      </div>
    </div>
  );
};

export default Footer;
