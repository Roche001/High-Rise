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
import House2 from "./components/house2/House2";
import House3 from "./components/house3/House3";
import House4 from "./components/house4/House4";

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
        <Route House2 path="House2" exact element={<House2 />} />
        <Route House3 path="House3" exact element={<House3 />} />
        <Route House4 path="House4" exact element={<House4 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
