import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ItemContext } from "../../../../../context/ItemContext";

const Carditem = ({ item }) => {
  const [count, setCount] = useState(0);
  const { items, setItems } = useContext(ItemContext);

  const handleAdd = () => {
    setCount(count + 1);
    setItems({
      total: items.total + 1,
      price: items.price + item.price,
    });
  };

  const handleMinus = () => {
    if (count <= 0) return;
    setCount(count - 1);
    setItems({
      total: items.total - 1,
      price: items.price - item.price,
    });
  };

  return (
    <div
      id={item.id}
      className="card w-48 flex flex-col justify-center items-center bg-[#fbfbfb] rounded-xl shadow-md p-2 pb-2 mb-2"
    >
      <figure className="pt-1">
        <img
          src={item.image}
          alt={item.name}
          className="rounded-xl w-[300px] h-[200px] object-cover"
        />
      </figure>
      <div className="flex flex-col items-center text-center mt-2 ">
        <h2 className="card-title text-[12px] max-w-[250px] ">{item.name}</h2>
        <p className="font-medium text-[10px]">Rp.{item.price}</p>
        {count == 0 ? (
          <button
            onClick={() => {
              handleAdd(item.id);
            }}
            className="btn btn-sm btn-primary mt-3"
          >
            Beli
          </button>
        ) : (
          <div className="flex justify-center gap-4 items-center mt-3">
            <button
              className="btn btn-sm btn-primary btn-outline "
              onClick={() => {
                handleMinus(item.id);
              }}
            >
              -
            </button>
            <p className="text-xl font-medium">{count}</p>
            <button
              onClick={() => {
                handleAdd(item.id);
              }}
              className="btn btn-sm btn-primary"
            >
              +
            </button>
          </div>
        )}
      </div>
      {/* {count != 0 ? (
        <p className="text-green-600 font-medium">
          Rp.{item.price + item.price * count}
        </p>
      ) : (
        <p className="text-red-600 font-medium">Rp.0</p>
      )} */}
    </div>
  );
};

export default Carditem;
