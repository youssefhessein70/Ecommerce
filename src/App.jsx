import BtmHeader from "./components/header/BtmHeader"
import TopHeader from "./components/header/TopHeader"
import React from "react";
import Home from "./page/home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./page/productDetails/productDetails";


function App() {

  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />

      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

    </>
  )
}

export default App;
