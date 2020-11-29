import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import styles from './Skills.module.css'
import classes from './Skills.module.css'

const Skills=({stack, techs})=> {
    return (
        <div className={styles.main}>
            <div className={styles.titleItem}>
                <FontAwesomeIcon className={styles.icon, styles.bIcon} icon={faDesktop} />
                    <p className={styles.bText}>{stack}</p>
            </div>
            <div className={styles.techs}>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faDesktop} />
                    <h5>UX Design</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faDesktop} />
                    <h5>UX Design</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faDesktop} />
                    <h5>UX Design</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faDesktop} />
                    <h5>UX Design</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faDesktop} />
                    <h5>UX Design</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faDesktop} />
                    <h5>UX Design</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faDesktop} />
                    <h5>UX Design</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faDesktop} />
                    <h5>UX Design</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faDesktop} />
                    <h5>UX Design</h5>    
                </div>
            </div>
        </div>
    )
}

export default Skills
