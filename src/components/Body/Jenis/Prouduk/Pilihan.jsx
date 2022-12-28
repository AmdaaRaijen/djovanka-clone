import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card";

const Pilihan = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="text-start flex justify-between">
        <h3 className="font-bold ">Produk Pilihan</h3>
        <Link
          to="/produk-pilihan"
          className="text-blue-700 text-[12px] font-medium cursor-pointer hover:text-blue-500"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="flex flex-col justify-start text-start ">
        <div className="flex flex-col items-start justify-start text-sm mb-4">
          <p className="text-[11px] text-slate-500">
            Produk pilihan terbaik, hanya untukmu!
          </p>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar ">
          <div className="flex flex-row gap-3 justify-start w-fit">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilihan;
