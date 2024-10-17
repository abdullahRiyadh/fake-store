import React from "react";
// import router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import components and pages
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      {/* ROUTER */}
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
        </Routes>
        <Sidebar></Sidebar>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
