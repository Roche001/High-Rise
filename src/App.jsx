import React from "react";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import Property from "./components/property/Property";
import Listing from "./components/listing/Listing";
import Contacts from "./components/listing/Listing";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Top />
      <Home />
      <Property />
      <Listing />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
