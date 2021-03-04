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
        tutorials, technology documentations, and online courses.
        {" "}
        <br />
        <br />
        Diving into a drastically different field was a painful process. However,
        i always love challanges. Along with the development i am keen on designing user-centric digital products. 
        I have good UX and UI design skill. At the front-end side, i am a proficient in techs such as HTML5, CSS3, SCSS, JavaScript, React, Redux, and TypeScript. 
        At the back-end side i am profecient in Node.js and express. I can use both NoSQL (MongoDB) and SQL (MariaDB, mySQl, PostreSQL) databases. I also have some knowledge
        of Docker, CI/CD and gitHub actions. Unit Testing with Jest and Cypress is another skill-set i possess. 
        In terms of the design, i am profecient user of UI design tool Figma and adobeXD. I also have knowldege of UX design processes such as research, analysis, design and validation. 
        <br />
        <br />I am currently pursuing a vocational degree in Heslinki Business
        College. I have also recently completed an intensive Full-Stack Web Development training
        in the Integrify Academy. I also have completed open university course by Helsinki University on Full-stack. Currently i am learning GraphQl and React-native on my own. 
        After more than a year of hard wrok, today, i am confident to develop Full-Stack applications uisng afformentioned technologies. 
        I have also developed a foundation, with which i am confident to learn any new technology fast. 
        <br />
        If you want to know more about me, kindly visit my CV page by pressing to "Straight to CV " button. 
      </p>
    </div>
  );
};

export default About;
