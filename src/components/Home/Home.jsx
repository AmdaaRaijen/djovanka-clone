import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Bonus from "../Body/Bonus/Bonus";
import News from "../Body/News/News";
import Jenis from "../Body/Jenis/Jenis";

const Home = () => {
  return (
    <>
      <Header />
      <Bonus />
      <News />
      <Jenis />
      <Footer />
    </>
  );
};

export default Home;
