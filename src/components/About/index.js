import React from "react";

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.content}>
        I am Full-Stack Developer based on Helsinki, Finland. Although i have a background in  
        Management and administration [Bachelor's Degree in Business Administration and Master's Degree in Public Management],
        i decided to pursue my career in the field of web development. As i had zero knowledge
        about web development or almost anything about IT, i started learning HTML, CSS and JavaScript with the help of youtube 
        tutorials and FreeCodeCamp exercises.
        {" "}
        <br />
        <br />
        Diving into a drastically different field was a painful process. However,
        i love it when it comes to challenge myslef. In about 6 months of starting i learned
        HTML5, CSS3, JavaScript, React, Redux, Node.js, Express.js, MongoDB,
        Testing, and TypeScript. I only have surface knowledge but know how to
        get things done. In addition to this technology, i have knowledge and
        skills in UX and UI Development.
        <br />
        <br />I am currently pursuing a vocational degree in Heslinki Business
        College. I have also recently completed an intensive Full Web Development training
        in the Integrify. Now i can develop Full-Stack MERN and PERN web applications. I have also developed
        a foundation, with which i am confident to learn any new technology fast. 
        <br />
        If you want to know more about me, kindly visit my CV page by pressing to "Straight to CV " button. 
      </p>
    </div>
  );
};

export default About;
