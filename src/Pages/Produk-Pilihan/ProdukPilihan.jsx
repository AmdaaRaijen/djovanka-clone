import React, { useContext } from "react";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import { ItemContext } from "../../context/ItemContext";

const ProdukPilihan = () => {
  const { items } = useContext(ItemContext);
  return (
    <div>
      <Header />
      <Card />
      {items.total == 0 ? null : <Cart bottom={"bottom-10"} />}
    </div>
  );
};

export default ProdukPilihan;
