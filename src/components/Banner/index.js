import React from "react";
import {useHistory} from 'react-router-dom'

import styles from "./Banner.module.css";
import imgMor from "../../assets/morning.jpg";
import imgAft from "../../assets/afternoon.jpg";
import imgEve from "../../assets/evening.jpg";
import profilePicture from '../../assets/Photo_CV.jpg'

const Banner = () => {
  const history= useHistory()
  const getGreetings = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const getImg = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      return imgMor;
    } else if (hour >= 12 && hour < 17) {
      return imgAft;
    } else {
      return imgEve;
    }
  };

  const divStyle = {
    backgroundColor: "#dbebfa",
    backgroundImage: `url(${getImg()})`,
  };

  const toCV = () => {
    history.push('/cv')
  }

  return (
    <div style={divStyle} className={styles.banner}>
      <div>
        <h1 className={styles.greetings}>
          Hi, {getGreetings()}! Good to see you.
        </h1>
        <p className={styles.intro}>
          My name is Chiranjibi Chapagain.<br></br> I am a Junior Full Stack
          Developer based in Helsinki, Finland.
        </p>
        <p className={styles.welcome}>
          I warmly welcome you to my portfolio page.{" "}
        </p>
        <button onClick={toCV} className={styles.button} >Straight to CV</button>
      </div>
      <div>
        <img className={styles.profile} src={profilePicture} alt='Profile'/>
      </div>
    </div>
  );
};

export default Banner;
