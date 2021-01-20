import React, {useState} from "react";
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Banner from "../Banner";
import Footer from "../Footer";
import About from "../About";
import Projects from "../Projects";
import Contact from '../Contact'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from "./Home.module.css";

function Home() {
  const [isNavVisible, setIsNavVisible] = useState(false)

 const handleClick = () => {
  setIsNavVisible(false)
 }

  return (
    <div>
      <main>
        <FontAwesomeIcon onClick={()=>setIsNavVisible(!isNavVisible)} className={styles.navIcon} icon={faBars} />
        <div className={styles.nav}>
          <div className={styles.navItems}><Link to="about" spy={true} smooth={true} >About Me</Link> </div>
          <div className={styles.navItems}><Link to="projects" spy={true} smooth={true}>Projects</Link></div>
          <div className={styles.navItems}><Link to="contact" spy={true} smooth={true}>Contact</Link></div>
        </div>
        {/* for small screen */}
        <div className={isNavVisible? styles.showMobileMenu:styles.hideMobileMenu}>
          <div  className={styles.navItems}><Link onClick={handleClick} to="about" spy={true} smooth={true} >About Me</Link> </div>
          <div  className={styles.navItems}><Link onClick={handleClick} to="projects" spy={true} smooth={true}>Projects</Link></div>
          <div className={styles.navItems}><Link onClick={handleClick} to="contact" spy={true} smooth={true}>Contact</Link></div>
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
