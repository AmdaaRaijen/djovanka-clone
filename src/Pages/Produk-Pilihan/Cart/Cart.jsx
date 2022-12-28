import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ItemContext } from "../../../context/ItemContext";

const Cart = () => {
  const { items } = useContext(ItemContext);

  return (
    <div className="flex flex-col items-center sticky bottom-9 z-50">
      <div className="flex flex-col mt-1 mb-1 bg-primary w-[95%] rounded-md shadow-md p-1 pb-2 pt-2">
        <div className="flex justify-between text-white  ml-2 mr-2">
          <div className="flex gap-3 text-white ml-2">
            <div className="flex items-center">
              <FaShoppingCart />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold">
                {items.total} {items.total > 1 ? "items" : "item"}
              </p>
              <p className="text-[12px]">semarang</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-semibold">Rp.{items.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
