import React from "react";
import { useState } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { useContext } from "react";
import { ItemContext } from "../../../context/ItemContext";

const CardItem = ({ product }) => {
  const [newCount, setNewCount] = useState(0);
  const { items, setItems } = useContext(ItemContext);

  const handleInc = () => {
    setNewCount(newCount + 1);
    if (newCount == 0) {
      setItems({
        total: items.total + 1,
        price: items.price + product.price,
      });
    } else {
      setItems({
        total: items.total,
        price: items.price + product.price,
      });
    }
  };

  const handleDec = () => {
    setNewCount(newCount - 1);
    if (newCount == 1) {
      setItems({
        total: items.total - 1,
        price: items.price - product.price,
      });
    } else {
      setItems({
        total: items.total,
        price: items.price - product.price,
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mt-1 mb-1 bg-white w-[95%] rounded-md shadow-md p-2 pb-5 ">
        <div className="flex gap-2">
          <div>
            <img
              src={product.image}
              alt=""
              className="rounded-xl w-[100px] h-[100px] object-cover"
            />
          </div>
          <div className="text-start">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-slate-400 mt-3 text-[10px]">Min. order 3</p>
            <p className="text-[12px] ">
              {" "}
              <span className="font-semibold"> Rp. {product.price}</span>/1 item
            </p>
          </div>
        </div>
        <div className="flex  justify-end">
          {newCount == 0 ? (
            <button onClick={handleInc} className="btn btn-sm btn-primary">
              Beli
            </button>
          ) : (
            <div className="flex flex-row items-center gap-2 ">
              <button
                className="btn btn-xs btn-primary btn-outline "
                onClick={handleDec}
              >
                -
              </button>
              <p className="font-semibold">{newCount}</p>
              <button onClick={handleInc} className="btn btn-xs btn-primary">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
