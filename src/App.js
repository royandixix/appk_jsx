import React, { createContext, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Components/Fungsional/HomePage";
import AboutComp from "./Components/Fungsional/AboutComp";
import NavbarComp from "./Components/Fungsional/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DetailComp from "./Components/Fungsional/DetailComp";

import ListComp from "./Components/Class/ListComp";
import TambahComp from "./Components/Class/TambahComp";
import EditComp from "./Components/Class/EditComp";
import KelasComp from "./Components/Hooks/Class/KelasComp";
import HooksComp from "./Components/Hooks/Functional/HooksComp";
import HooksUseEffects from "./Components/Hooks/Functional/HooksUseEffects";
import { CartContext } from "./Components/CartContext";
import ProductComp from "./Components/Hooks/Functional/ProductComp";
import HookReducer from "./Components/Fungsional/HookReducer";
import Tagihan from "./Components/Hooks/Functional/Tagihan";

// import logo from './logo.svg';
// import Home from './Components/Fungsional/Home';
// import Beranda from './Components/Class/Beranda';
// import Parent from './Components/Class/Parent';
// import BoostrapComp from './Components/Class/BoostrapComp'; // ← cukup sekali

export const KeranjangContext = createContext();
const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan + state.hargasatuan * state.jumlah,
      };
    case "kurang":
      if (state.jumlah <= 1) {
        return state;
      }
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargatotal: state.hargasatuan * state.jumlah - state.hargasatuan,
      };
    default:
      return state;
  }
};

function DetailWtraper() {
  const location = useLocation();
  return <DetailComp location={location} />;
}

const App = () => {
  const [value, setValue] = useState(2);
  const [count, dispatch] = useReducer(reducer, initialState);

  // const [value, setValue] = useState(2 )
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ value, setValue }}>
        <NavbarComp />
        <KeranjangContext.Provider
          value={{ keranjangContext: count, keranjangDispatch: dispatch }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutComp />} />
            <Route path="/mahasiswa" element={<ListComp />} />
            <Route path="/mahasiswa/tambah" element={<TambahComp />} />
            <Route path="/mahasiswa/edit" element={<EditComp />} />
            <Route path="/mahasiswa/edit" element={<EditComp />} />
            <Route path="/kelas" element={<KelasComp />} />
            <Route path="/hooks" element={<HooksComp />} />
            <Route path="/useeffects" element={<HooksUseEffects />} />
            <Route path="/produk" element={<ProductComp />} />
            <Route path="/reducer" element={<HookReducer />} />
            <Route path="/tagihan" element={<Tagihan />} />


            <Route path="/detail/:id" element={<DetailWtraper />} />
          </Routes>
        </KeranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
