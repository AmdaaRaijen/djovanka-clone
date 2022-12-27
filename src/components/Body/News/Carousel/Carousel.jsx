import React from "react";
import Slider from "./Slider";

const Carousel = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1670731951987-3eb3c219f7fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      title: "flower",
    },
    {
      url: "https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "books",
    },
    {
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "woman",
    },
    {
      url: "https://images.unsplash.com/photo-1508265802264-937da5e9cc81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "ballons",
    },
  ];
  return (
    <div>
      <div className="w-96 h-96 m-auto">
        <Slider images={images} />
      </div>
    </div>
  );
};

export default Carousel;
