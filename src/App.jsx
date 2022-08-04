import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/top/Top";
import Home from "./components/rent/Rent";
import Rent from "./components/rent/Rent";
import Offices from "./components/offices/Offices";
import Contacts from "./components/contacts/Contacts";
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
        <Route Offices path="Listing" exact element={<Offices />} />
        <Route Contacts path="Contacts" exact element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
