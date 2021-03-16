import React from "react";
import {useHistory} from 'react-router-dom'

import styles from "./Projects.module.css";

const Projects = () => {
  const history = useHistory()

  const toUX = () => {
    history.push('/UX')
  }
  const toDevelopment = () => {
    history.push('/development')
  }
  
  return (
    <>
      <div className={styles.projectMain}>
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.texts}>Although i am a Full-Stack developer, i belive, i lean more towards
        Front-End. Before i even started programming i have been doing graphic design as a hobby. Later during my
        master's degree i came to know about designing tools such as Figma and Adobe XD. I started learning using
        these tools on my own and in a short time i start designing User Interfaces using Figma. As a passionate
        developer with interest in the Front-End side i feel that i should get my hands dirty designing user 
        interfaces and i believe, it is vital to have OK design skills for a Front-End developer. Thus 
        this sections includes both my Development and Design projects. </p>
        <div className={styles.projectTypes}>
          <div onClick={toUX} className={styles.project}>UX/UI Design</div>
          <div onClick={toDevelopment} className={styles.project}>Web Development</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
