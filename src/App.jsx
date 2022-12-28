import "./App.css";
import Home from "./Pages/Home/Home";
import Ubah from "./Pages/Ubah/Ubah";
import { Route, Routes } from "react-router-dom";
import ProdukPilihan from "./pages/Produk-Pilihan/ProdukPilihan";
import { ItemContextProvider } from "./context/ItemContext";
import Login from "./pages/Login/Login";

function App() {
  return (
    <ItemContextProvider>
      <div className="flex text-center  items-center justify-center h-full max-w-full ">
        <div className="min-h-full relative w-[442px] bg-[#FAFAFA]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ubah" element={<Ubah />} />
            <Route path="produk-pilihan" element={<ProdukPilihan />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </ItemContextProvider>
  );
}

export default App;
