import React from 'react'
import {useHistory, Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import projects from '../../projectData'
import Tile from '../Tile'
import Mobile from '../../assets/mobile.png'
import styles from './Ux.module.css'

const UX = () => {
    const history=useHistory()
    const handleClick = () => {
    history.push("/")
    }

    return (
        <div className={styles.main}>
        <FontAwesomeIcon onClick={handleClick} className={styles.arrow} icon={faArrowLeft} />
      <h1 className={styles.heading}>UX/UI Projects</h1>  
      <div className={styles.projects}>
        {projects.design.map((project) => (
          <Link className={styles.link} key={project.id}  to= {`/uxprojects/${project.id}`}>
          <Tile image={project.images[3]} name={project.title} />
          </Link>
        ))}
      </div>
    </div>
    )
}

export default UX
