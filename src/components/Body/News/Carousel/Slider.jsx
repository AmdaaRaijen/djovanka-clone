import React, { useState } from "react";
import { useEffect } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === images.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const setCurrentDot = (index) => {
    setCurrent(index);
  };

  return (
    <>
      <div className=" h-full flex justify-center ">
        <div id={current} className=" relative  bg-cover bg-center z-[1] ">
          <img
            className={`rounded-md w-[380px] h-[380px] object-cover `}
            src={images[current].url}
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <BiLeftArrow className="cursor-pointer" onClick={handlePrev} />
        {images.map((image, index) => {
          return (
            <div
              onClick={() => setCurrentDot(index)}
              className={`flex gap-1 h-2 w-2 rounded-full bg-slate-600 cursor-pointer  ${
                index === current ? "bg-blue-500" : ""
              }`}
            ></div>
          );
        })}
        <BiRightArrow className="cursor-pointer" onClick={handleNext} />
      </div>
    </>
  );
};

export default Slider;
