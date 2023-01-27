import React, { useState, useEffect } from "react";
import "./Top.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { topper } from "../../nav";
import { Link } from "react-router-dom";

const Top = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = () => {
    toggleMenu();
  };
  const [navbarColor, setNavbarColor] = useState("transparent");
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset >= 100) {
        setNavbarColor("#37474f");
      } else {
        setNavbarColor("transparent");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="top-bar"
      style={{ backgroundColor: navbarColor }}
      onClick={handleClick}
    >
      <div className="logo">
        <Link to="/">
          <div className="logo-one">
            <img src="./assets/logo.png" alt="logo" loading="lazy" />
          </div>
        </Link>
      </div>
      <div className="top-icon" onClick={toggleMenu}>
        <h4>
          <GiHamburgerMenu />
        </h4>
      </div>

      <div className={menuOpen ? "menu-items-one" : "menu-items"}>
        <div className="top-close" onClick={handleClick}>
          <h4>
            <AiOutlineClose />
          </h4>
        </div>
        <div className="menu-open">
          {topper.map((topper, index) => {
            return (
              <div key={index}>
                <Link
                  to={topper.navlink}
                  className="menu-one"
                  onClick={handleClick}
                >
                  {topper.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top;
