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
import House5 from "./components/house5/House5";
import House6 from "./components/house6/House6";
import House7 from "./components/house7/House7";
import House8 from "./components/house8/House8";
import House9 from "./components/house9/House9";

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
        <Route House5 path="House5" exact element={<House5 />} />
        <Route House6 path="House6" exact element={<House6 />} />
        <Route House7 path="House7" exact element={<House7 />} />
        <Route House8 path="House8" exact element={<House8 />} />
        <Route House9 path="House9" exact element={<House9 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
