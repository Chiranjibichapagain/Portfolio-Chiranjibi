import React from "react";
import {useHistory} from 'react-router-dom'

import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  
  
  return (
    <div className={styles.navbar}>
      {/* <img onClick={goHome} className={styles.logo} src={logo} /> */}
      {/* <Navbar /> */}
    </div>
  );
};

export default Header;
