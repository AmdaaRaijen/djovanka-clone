import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Card from "./Card/Card";

const Pilihan = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="text-start flex justify-between">
        <h3 className="font-bold text-xl">Produk Pilihan</h3>
        <p className="text-blue-700 font-medium cursor-pointer hover:text-blue-500">
          Lihat Semua
        </p>
      </div>
      <div className="flex flex-col justify-start text-start mt-3">
        <div>
          <p className="font-medium">Produk pilihan terbaik, hanya untukmu!</p>
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
