import React, { useState } from "react";
import "./Top.css";
import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";
import { topper } from "../../nav";
import { Link } from "react-router-dom";

const Top = () => {
  const [showMenu, setShowmenu] = useState(false);
  const toggleMenu = () => {
    setShowmenu((showMenu) => !showMenu);
  };
  return (
    <div className="top-bar">
      <div className="logo">
        <Link to="/">
          <img src="./assets/logo.png" alt="logo" />{" "}
        </Link>
      </div>
      <div className="top-icon" onClick={toggleMenu}>
        <h4>
          <GiHamburgerMenu />
        </h4>
      </div>
      <div className="menu-items">
        {topper.map((topper, index) => {
          return (
            <div key={index}>
              <Link
                to={topper.navlink}
                className="menu-one"
                style={{ display: showMenu ? "inherit" : "none" }}
              >
                {topper.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top;
