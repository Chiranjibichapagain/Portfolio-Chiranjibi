import React from "react";
import {useHistory} from 'react-router-dom'

import Routes from './routes'
import Footer from './components/Footer'
import logo from './assets/Logo/logoX.jpg'
import "./styles/app.css";


function App() {
  const history = useHistory()
  const goHome = () => {
    history.push('/')
  }
  return (
    <div>
      <div className="navDiv">
        <img onClick={goHome} className="logo" src={logo} alt="logo" />
      </div>
      <main>
        <Routes/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
