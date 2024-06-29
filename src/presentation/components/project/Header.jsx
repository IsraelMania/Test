import React from "react";
import Logo from "../../../assets/logo.png";
import Image from "../basic/Image";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <Image imagenode={Logo} />
      <SearchBar />
    </header>
  );
};

export default Header;
