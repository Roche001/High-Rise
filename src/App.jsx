import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import Rent from "./components/rent/Rent";
import Buy from "./components/buy/Buy";
import Submit from "./components/submit/Submit";
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
import House10 from "./components/house10/House10";
import House11 from "./components/house11/House11";
import House12 from "./components/house12/House12";
import House13 from "./components/house13/House13";
import House14 from "./components/house14/House14";
import House15 from "./components/house15/House15";
import House16 from "./components/house16/House16";
import House17 from "./components/house17/House17";
import House18 from "./components/house18/House18";
import House19 from "./components/house19/House19";
import House20 from "./components/house20/House20";
import House21 from "./components/house21/House21";
import House22 from "./components/house22/House22";
import House23 from "./components/house23/House23";
import House24 from "./components/house24/House24";
import Profile1 from "./components/profile1/Profile1";
import Profile2 from "./components/profile2/Profile2";
import Profile3 from "./components/profile3/Profile3";
import Profile4 from "./components/profile4/Profile4";
import Apartment from "./components/apartment/Apartment";
import Villa from "./components/villa/Villa";
import Family from "./components/family/Family";
import Studio from "./components/studio/Studio";
import Condo from "./components/condo/Condo";
import Shop from "./components/shop/Shop";
import Multi from "./components/multi/Multi";
import Lot from "./components/lot/Lot";
import Offices from "./components/offices/Offices";
import Log from "./components/log/Log";
import In from "./components/in/In";
import Register from "./components/register/Register";
import Pass from "./components/pass/Pass";
const App = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route Rent path="Rent" exact element={<Rent />} />
        <Route Buy path="Buy" exact element={<Buy />} />
        <Route Submit path="Submit" exact element={<Submit />} />
        <Route House1 path="House1" exact element={<House1 />} />
        <Route House2 path="House2" exact element={<House2 />} />
        <Route House3 path="House3" exact element={<House3 />} />
        <Route House4 path="House4" exact element={<House4 />} />
        <Route House5 path="House5" exact element={<House5 />} />
        <Route House6 path="House6" exact element={<House6 />} />
        <Route House7 path="House7" exact element={<House7 />} />
        <Route House8 path="House8" exact element={<House8 />} />
        <Route House9 path="House9" exact element={<House9 />} />
        <Route House10 path="House10" exact element={<House10 />} />
        <Route House11 path="House11" exact element={<House11 />} />
        <Route House12 path="House12" exact element={<House12 />} />
        <Route House13 path="House13" exact element={<House13 />} />
        <Route House14 path="House14" exact element={<House14 />} />
        <Route House15 path="House15" exact element={<House15 />} />
        <Route House16 path="House16" exact element={<House16 />} />
        <Route House17 path="House17" exact element={<House17 />} />
        <Route House18 path="House18" exact element={<House18 />} />
        <Route House19 path="House19" exact element={<House19 />} />
        <Route House20 path="House20" exact element={<House20 />} />
        <Route House21 path="House21" exact element={<House21 />} />
        <Route House22 path="House22" exact element={<House22 />} />
        <Route House23 path="House23" exact element={<House23 />} />
        <Route House24 path="House24" exact element={<House24 />} />
        <Route Profile1 path="Profile1" exact element={<Profile1 />} />
        <Route Profile2 path="Profile2" exact element={<Profile2 />} />
        <Route Profile3 path="Profile3" exact element={<Profile3 />} />
        <Route Profile4 path="Profile4" exact element={<Profile4 />} />
        <Route Apartment path="Apartment" exact element={<Apartment />} />
        <Route Villa path="Villa" exact element={<Villa />} />
        <Route Family path="Family" exact element={<Family />} />
        <Route Studio path="Studio" exact element={<Studio />} />
        <Route Condo path="Condo" exact element={<Condo />} />
        <Route Shop path="Shop" exact element={<Shop />} />{" "}
        <Route Multi path="Multi" exact element={<Multi />} />
        <Route Lot path="Lot" exact element={<Lot />} />
        <Route Offices path="Offices" exact element={<Offices />} />
        <Route Log path="Log" exact element={<Log />}>
          <Route index element={<Navigate to="In" />} />
          <Route In path="In" exact element={<In />} />
          <Route Register path="Register" exact element={<Register />} />
          <Route Pass path="Pass" exact element={<Pass />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
