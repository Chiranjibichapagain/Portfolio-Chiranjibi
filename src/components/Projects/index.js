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
        <div className={styles.projectTypes}>
          <div onClick={toUX} className={styles.project}>UX/UI Design</div>
          <div onClick={toDevelopment} className={styles.project}>Web Development</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
