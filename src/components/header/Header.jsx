import React from "react";

import SearchBar from "./SearchBar";
import IconsBar from "./IconsBar";

import "./header.css";

import logo from "../../assets/images/instagram.png";

const Header = () => {
  return (
    <section className="header-wrapper">
      <div className="header">
        <div className="header__brand">
          <img src={logo} alt="Instagram logo" />
        </div>
        <div className="header__navs">
            <SearchBar />
            <IconsBar />
        </div>
      </div>
    </section>
  );
};

export default Header;
