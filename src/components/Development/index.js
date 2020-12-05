import React from 'react'
import {useHistory, Link} from 'react-router-dom'

import projects from '../../projectData'
import Tile from '../Tile'
import Mobile from '../../assets/mobile.png'
import styles from './Dev.module.css'

const Development = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Web Development Projects</h1>  
      <div className={styles.projects}>
        {projects.dev.map((project) => (
          <Link  to= {`/devprojects/${project.id}`}>
          <Tile  image={Mobile} name={project.title} />
          </Link>
        ))}
      </div>
  </div>
    )
}

export default Development
