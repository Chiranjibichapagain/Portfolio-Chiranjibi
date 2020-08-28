import React from "react";

import styles from "./Banner.module.css";
import imgMor from "../../assets/morning.jpg";
import imgAft from "../../assets/afternoon.jpg";
import imgEve from "../../assets/evening.jpg";

const Banner = () => {
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
    width: "100vw",
    height: "80vh",
    backgroundColor: "#dbebfa",
    backgroundImage: `url(${getImg()})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <div style={divStyle}>
      <h1>Hi!{getGreetings()} Good to see you.</h1>
    </div>
  );
};

export default Banner;
