import React from 'react'
import {useHistory} from 'react-router-dom'

import styles from './ProjectDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import projects from '../../projectData'

const ProjectDetails = ({ match }) => {
    const id = match.params.id
    const data = id.includes('dev')?projects.dev.find((item) => item.id === id):projects.design.find((item) => item.id === id)
    
    const history=useHistory()
    const handleClick = () => {
        if (id.includes('dev')) {
            history.push("/development")
        } else {
            history.push("/ux")
        }
    }
    
    return (
        <div className={styles.main}>
            <FontAwesomeIcon onClick={handleClick} className={styles.arrow} icon={faArrowLeft} />
            <h1 className={styles.heading}>{data.title}</h1>
            <div className={styles.block} >
                <div className={styles.imgDiv}>
                    <img className={styles.image} src={data.images[0]} alt="phone" />
                </div>
                <div className={styles.textDiv}>
                    <h3 className={styles.subHead}>{data.title}</h3>
                    <p className={styles.texts} >{data.about }</p>
                    <a className={styles.btnWrapper} href={data.link} target="blank"><button className={styles.button} >view app</button></a>
                </div>
            </div>
            <hr className={styles.lines}/>
            <div className={styles.block}>
                <div className={styles.imgDiv2}>
                    <img className={styles.image2} src={data.images[1]} alt="phone" />
                </div>
                <div className={styles.imgDiv2}>
                    <img className={styles.image2} src={data.images[2]} alt="phone" />
                </div>
            </div>
           
        </div>
    )
}

export default ProjectDetails
