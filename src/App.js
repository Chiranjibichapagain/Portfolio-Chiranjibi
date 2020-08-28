import React from "react";
import "./styles/app.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Banner />
      </main>

      <footer>footer</footer>
    </body>
  );
}

export default App;
