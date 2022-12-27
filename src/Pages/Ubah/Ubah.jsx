import React from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";

const Ubah = () => {
  const [search, setSearch] = React.useState("");
  console.log(search);

  return (
    <div className="h-screen">
      <Header search={search} setSearch={setSearch} />
      <Card search={search} />
    </div>
  );
};

export default Ubah;
