import React from "react";
import Slider from "./Carousel/Slider";
import Carousel from "./Carousel/Carousel";

function News() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col mt-1 mb-1 bg-white w-[99%] rounded-md shadow-md p-2 pb-5 ">
        <div className="flex flex-col items-start justify-start text-sm mb-4">
          <h2 className="font-bold">Infomasi Terbaru</h2>
          <p className="text-[11px] text-slate-500">
            Informasi terbaru hanya untukmu!
          </p>
        </div>
        <>
          <Carousel />
        </>
      </div>
    </div>
  );
}

export default News;
