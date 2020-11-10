import React from "react";

import "./Home.module.css";
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import About from "../About";
import Projects from "../Projects";
import Contact from '../Contact'

function Home() {
  return (
    <body>
      <main>
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
