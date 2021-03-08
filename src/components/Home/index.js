import React, {useState} from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
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
          <div className={styles.navItems}><a href="#about" >About Me</a></div>
          <div className={styles.navItems}><a href="#projects" >Projects</a></div>
          <div className={styles.navItems}><a href="#contact" >Contact</a></div>
        </div>
        {/* for small screen */}
        <div className={isNavVisible? styles.showMobileMenu:styles.hideMobileMenu}>
          <div  className={styles.navItems}><a onClick={handleClick} href="#about" >About Me</a> </div>
          <div  className={styles.navItems}><a onClick={handleClick} href="#projects" >Projects</a></div>
          <div className={styles.navItems}><a onClick={handleClick} href="#contact" >Contact</a></div>
        </div>
        <Banner />
        <ScrollableAnchor id={"about"}>
          <div id="about">
            <About />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"projects"}>
          <div id="projects">
            <Projects />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"contact"}>
          <div id="contact">
            <Contact />
          </div>
        </ScrollableAnchor>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
