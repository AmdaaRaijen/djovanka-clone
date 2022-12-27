import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Ubah from "./components/Ubah/Ubah";

function App() {
  return (
    <div className="flex text-center  items-center justify-center h-full max-w-full ">
      <div className="min-h-full relative w-[442px] bg-[#FAFAFA]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ubah" element={<Ubah />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
