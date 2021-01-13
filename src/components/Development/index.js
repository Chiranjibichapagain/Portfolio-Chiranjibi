import React from 'react'
import {useHistory, Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import projects from '../../projectData'
import Tile from '../Tile'
import Mobile from '../../assets/mobile.png'
import styles from './Dev.module.css'

const Development = () => {
   const history=useHistory()
    const handleClick = () => {
    history.push("/")
    }
  
  return (
    <div className={styles.main}>
      <FontAwesomeIcon onClick={handleClick} className={styles.arrow} icon={faArrowLeft} />
      <h1 className={styles.heading}>Web Development Projects</h1>  
      <div className={styles.projects}>
        {projects.dev.map((project) => (
          <Link className={styles.link}  to= {`/devprojects/${project.id}`}>
          <Tile  image={project.images[0]} name={project.title} />
          </Link>
        ))}
      </div>
  </div>
    )
}

export default Development
