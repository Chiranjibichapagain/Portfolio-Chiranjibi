import React from "react";

import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import "./styles/app.css";


function App() {
  return (
    <body>
      <Header />
      <main>
        <Routes/>
      </main>
      <Footer />
    </body>
  );
}

export default App;
