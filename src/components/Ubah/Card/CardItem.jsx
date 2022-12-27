import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CardItem = () => {
  const [kota, setKota] = useState([]);

  const handleFetch = async () => {
    const res = await fetch(
      `http://www.emsifa.com/api-wilayah-indonesia/api/villages/3374080.json`
    );

    if (res.ok) {
      const data = await res.json();
      setKota(data);
      setKodePos(data);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {kota.map((data) => {
        return (
          <div className="flex flex-col ">
            <div className="flex flex-col mt-1 mb-1 bg-white w-[99%] rounded-md shadow-md p-2 pb-5 ">
              <div className="flex flex-col text-start">
                <h3 className="font-medium">Semarang</h3>
                <p className="text-[8px]">Lokasi {data.name}</p>
                <p className="text-[10px] mt-3">Kode Pos :</p>
                <p className="text-[10px]">{data.district_id}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardItem;
