import React, { useState } from "react";

import styles from "./About.module.css";
import Button from "../Button/Button";
import CV from "../../assets/cv.jpg";
const Main = () => {
  const [click, setclick] = useState("false");
  const [view, setview] = useState("true");

  const showItem = () => {
    setclick("true");
    setview("false");
  };

  const hideItem = () => {
    setclick("false");
    setview("true");
  };

  const hide = {
    display: "none",
  };

  const show = {
    display: "block",
  };

  const viewCvButtonStyle = () => {
    if (view === "true") {
      return show;
    } else {
      return hide;
    }
  };

  const cvDivStyle = () => {
    if (click === "false") {
      return hide;
    } else {
      return show;
    }
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.content}>
        I learned most of the skills i have in Full Stack Web Development on my
        own. Online courses, youtube video, documentation were my source of
        information. I have earned my Bachelors degree in Business Management
        and Masters degree in Public Administration. Both from Finland. After i
        kinda failed to find a job related to my degrees, i started thinking of
        alternative career. I was always interested in the filed of IT and i
        thought of giving it a try. From the beginning of 2020 while Corona
        Virus was engaging the whole world, so the Web Development did to me.{" "}
        <br />
        <br />
        Diving into a entirely different field was a painful process for me. But
        i love it when it comes challenging myslef. In about 6 months i learned
        HTML5, CSS3, JavaScript, React, Redux, Node.js, Express.js, MongoDB,
        Testing, and TypeScript. I only have surface knowledge but know how to
        get things done. In addition to this technology, i have knowledge and
        skills in UX and UI Development.
        <br />
        <br />I am currently pursuing a vocational degree in Heslinki Business
        College. I have also started an intensive Full Web Development training
        in the Integrify. I am motivated and working hard to become a Full Stack
        Web Developer in near future.
        <br />
        <br />
        Want to know more ? check out my CV.
      </p>
      <div style={viewCvButtonStyle()}>
        <Button text="View CV" type="primary" handleClick={showItem} />
      </div>

      <div style={cvDivStyle()}>
        <img src={CV} className={styles.CV} />
        {/* <embed src={CV} width="700px" height="1000px" /> */}
        <Button text="Hide CV" type="primary" handleClick={hideItem} />
      </div>
    </div>
  );
};

export default Main;
