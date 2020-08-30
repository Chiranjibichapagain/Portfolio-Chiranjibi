import React from "react";
import "./styles/app.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Banner />
        <About />
      </main>

      <Footer />
    </body>
  );
}

export default App;
