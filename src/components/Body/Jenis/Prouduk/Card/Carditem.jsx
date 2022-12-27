import React from "react";
import { useState } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

const Carditem = ({ item }) => {
  const [count, setCount] = useState(0);
  const [plusActive, setPlusActive] = useState(false);
  const [minActive, setMinActive] = useState(false);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleaplusActive = () => {
    setPlusActive(true);
    setMinActive(false);
  };

  const handleMinActive = () => {
    setMinActive(true);
    setPlusActive(false);
  };

  const handleMinus = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div
      id={item.id}
      className="card w-48 flex flex-col justify-center items-center"
    >
      <figure className="pt-10">
        <img
          src={item.image}
          alt={item.name}
          className="rounded-xl w-[300px] h-[300px] object-cover"
        />
      </figure>
      <div className="flex flex-col items-center text-center mt-2">
        <h2 className="card-title max-w-[250px] ">{item.name}</h2>
        <p className="font-medium">Rp.{item.price}</p>
        <div className="flex justify-center gap-4 items-center mt-2">
          <FaMinusSquare
            className={`w-8 h-8 text-blue-700 cursor-pointer ${
              minActive ? "text-blue-400" : "text-blue-700"
            }`}
            onClick={() => {
              handleMinus(item.id);
              handleMinActive();
            }}
          />
          <p className="text-xl font-medium">{count}</p>
          <FaPlusSquare
            className={`w-8 h-8 text-blue-700 cursor-pointer ${
              plusActive ? "text-blue-400" : "text-blue-700"
            }`}
            onClick={() => {
              handleaplusActive();
              handleAdd(item.id);
            }}
          />
        </div>
      </div>
      {count != 0 ? (
        <p className="text-green-600 font-medium">
          Rp.{item.price + item.price * count}
        </p>
      ) : (
        <p className="text-red-600 font-medium">Rp.0</p>
      )}
    </div>
  );
};

export default Carditem;
