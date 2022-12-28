import React from "react";
import { useState } from "react";
import Data from "../../../components/Body/Jenis/Prouduk/Data/DataProduk";
import Carditem from "./CardItem";

const Card = () => {
  return (
    <div className="mb-10">
      {Data.map((product, idx) => {
        return <Carditem key={idx} product={product} />;
      })}
    </div>
  );
};

export default Card;
