import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Bonus from "./components/Body/Bonus/Bonus";
import News from "./components/Body/News/News";
import Jenis from "./components/Body/Jenis/Jenis";

function App() {
  return (
    <div className="flex text-center  items-center justify-center h-full max-w-full ">
      <div className="min-h-full relative w-[442px] bg-[#FAFAFA]">
        <Header />
        <Bonus />
        <News />
        <Jenis />
        <Footer />
      </div>
    </div>
  );
}

export default App;
