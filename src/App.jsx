import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/top/Top";
import Home from "./components/rent/Rent";
import Rent from "./components/rent/Rent";
import Buy from "./components/buy/Buy";
import Sell from "./components/sell/Sell";
import Footer from "./components/footer/Footer";
import Photo from "./components/photo/Photo";

const App = () => {
  return (
    <Router>
      <Top />
      <Photo />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route Rent path="Rent" exact element={<Rent />} />
        <Route Buy path="Buy" exact element={<Buy />} />
        <Route Sell path="Sell" exact element={<Sell />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
