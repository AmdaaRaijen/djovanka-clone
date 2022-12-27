import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SlBadge } from "react-icons/sl";

const CardItem = ({ search }) => {
  const [kota, setKota] = useState([]);

  const handleFetch = async () => {
    const res = await fetch(
      `http://www.emsifa.com/api-wilayah-indonesia/api/villages/3374080.json`
    );

    if (res.ok) {
      const data = await res.json();
      setKota(data);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {kota
        .filter((data) => {
          return search.toLowerCase() === ""
            ? data
            : data.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((data) => {
          return (
            <div className="flex flex-col items-center" key={data.id}>
              <div className="flex flex-col mt-1 mb-1 bg-white w-[95%] rounded-md shadow-md p-2 pb-5 ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col text-start">
                    <h3 className="font-medium">Semarang</h3>
                    <p className="text-[8px]">Lokasi {data.name}</p>
                    <p className="text-[10px] mt-3">Alamat :</p>
                    <p className="text-[10px]">SEMARANG, {data.name}</p>
                  </div>
                  <SlBadge />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CardItem;
