import React from "react";
import Data from "../Data/DataProduk";
import Carditem from "./Carditem";

const Card = () => {
  return (
    <>
      {Data.map((item, idx) => {
        return <Carditem key={idx} item={item} />;
      })}
    </>
  );
};

export default Card;
