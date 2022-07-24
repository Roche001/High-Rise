import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import Property from "./components/property/Property";
import Listing from "./components/listing/Listing";
import Contacts from "./components/listing/Listing";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route Property path="Property" exact element={<Property />} />
        <Route Listing path="Listing" exact element={<Listing />} />
        <Route Contacts path="Contacts" exact element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
