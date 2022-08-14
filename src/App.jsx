import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import Rent from "./components/rent/Rent";
import Buy from "./components/buy/Buy";
import Sell from "./components/sell/Sell";
import Footer from "./components/footer/Footer";
import House1 from "./components/house1/House1";

const App = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route Rent path="Rent" exact element={<Rent />} />
        <Route Buy path="Buy" exact element={<Buy />} />
        <Route Sell path="Sell" exact element={<Sell />} />
        <Route House1 path="House1" exact element={<House1 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
