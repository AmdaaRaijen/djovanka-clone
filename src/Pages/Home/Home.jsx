import { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Bonus from "../../components/Body/Bonus/Bonus";
import News from "../../components/Body/News/News";
import Jenis from "../../components/Body/Jenis/Jenis";
import Cart from "../Produk-Pilihan/Cart/Cart";
import { ItemContext } from "../../context/ItemContext";

const Home = () => {
  const { items } = useContext(ItemContext);
  return (
    <>
      <Header />
      <Bonus />
      <News />
      <Jenis />
      {items.total > 0 && <Cart bottom={"bottom-24"} />}
      <Footer />
    </>
  );
};

export default Home;
