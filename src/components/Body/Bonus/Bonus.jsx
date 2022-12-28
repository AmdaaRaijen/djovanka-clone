import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { TbReportMoney } from "react-icons/tb";

const Bonus = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row justify-center items-center  mt-1 mb-1 bg-white w-[99%] rounded-md shadow-md p-2">
        <div className="flex flex-row items-start justify-start pr-16">
          <TbReportMoney />
          <div className="flex flex-col items-start gap-1 ml-2">
            <h3 className="text-[13px]">Voucher Kamu</h3>
            <p className="text-md font-semibold">5 Voucher</p>
          </div>
        </div>
        <hr className="w-[1px] bg-black" />
        <div className=" border-l-2 pl-12  flex flex-row items-start justify-start pr-9">
          <AiOutlineStar />
          <div className="flex flex-col items-start gap-1 ml-2">
            <h3 className="text-[13px]">Point</h3>
            <p className="text-md font-semibold">2000 Point</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
