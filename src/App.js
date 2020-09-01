import React from "react";
import "./styles/app.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Banner />
        <About />
        <Projects />
      </main>

      <Footer />
    </body>
  );
}

export default App;
