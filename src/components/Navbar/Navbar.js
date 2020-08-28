import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navList}>
      <a className={styles.items} href="#">
        About Me
      </a>
      <a className={styles.items} href="#">
        My Projects
      </a>
      <a className={styles.items} href="#">
        Contact Me
      </a>
    </div>
  );
};

export default Navbar;
