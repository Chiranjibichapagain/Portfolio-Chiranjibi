import React from 'react'
import {useHistory} from 'react-router-dom'

import projects from '../../projectData'
import Tile from '../Tile'
import Mobile from '../../assets/mobile.png'
import styles from './Dev.module.css'

const Development = () => {
    const history = useHistory()
    
    const handleClick = () => {
      history.push('/projects')  
    }

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Web Development Projects</h1>  
      <div className={styles.projects}>
        { projects.dev.map((project) => (
          <Tile handleClick={handleClick} data= {project} image={Mobile} name={project.title} />
        ))}
      </div>
  </div>
    )
}

export default Development
