import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Bonus from "../../components/Body/Bonus/Bonus";
import News from "../../components/Body/News/News";
import Jenis from "../../components/Body/Jenis/Jenis";

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
