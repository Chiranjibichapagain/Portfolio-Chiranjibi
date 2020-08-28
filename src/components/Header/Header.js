import React from "react";

import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} />
      <Navbar />
    </div>
  );
};

export default Header;
