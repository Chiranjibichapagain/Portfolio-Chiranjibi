import React from "react";
import {Link} from 'react-scroll'

import Banner from "../Banner";
import Footer from "../Footer";
import About from "../About";
import Projects from "../Projects";
import Contact from '../Contact'
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <main>
        <div className={styles.nav}>
          <div className={styles.navItems}><Link to="about" spy={true} smooth={true} >About Me</Link> </div>
          <div className={styles.navItems}><Link to="projects" spy={true} smooth={true}>Projects</Link></div>
          <div className={styles.navItems}><Link to="contact" spy={true} smooth={true}>Contact</Link></div>
        </div>
        <Banner />
        <div id="about">
        <About />
        </div>
        <div id="projects">
        <Projects />
        </div>
        <div id="contact">
        <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
