import React from "react";
import {Link} from 'react-scroll'

import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import About from "../About";
import Projects from "../Projects";
import Contact from '../Contact'
import styles from "./Home.module.css";

function Home() {
  return (
    <body>
      <main>
        <div className={styles.nav}>
          <div className={styles.navItems}><Link>About Me</Link> </div>
          <div className={styles.navItems}><Link>Projects</Link></div>
          <div className={styles.navItems}><Link>Contact</Link></div>
        </div>
        <Banner />
        <About />
        <Projects />
        <Contact/>
      </main>
      <Footer />
    </body>
  );
}

export default Home;
