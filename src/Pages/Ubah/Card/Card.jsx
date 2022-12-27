import React from "react";
import CardItem from "./CardItem";

const Card = ({ search }) => {
  return (
    <>
      <CardItem search={search} />
      <p className="font-bold">Yay! You have seen it all</p>
    </>
  );
};

export default Card;
