/* eslint-disable no-sequences */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

import styles from './Work.module.css'

const Work=({title, company, location, date, tasks})=> {
    return (
        <div>

        <div className={styles.main}>
            <div className={styles.titleItem}>
                <FontAwesomeIcon className={styles.icon, styles.bIcon} icon={faSpaceShuttle} />
                    <p className={styles.bText}>{title}</p>
            </div>

            <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faBuilding} />
                    <p className={styles.text}>{`${company} | ${location} | ${date}`}</p>
            </div>
            <hr/>
            <div className={styles.tasks}>
                    {tasks.map(items => (
                        <li key={items} className={styles.list}>
                                <FontAwesomeIcon className={styles.icon} icon={faHandPointRight} />
                                <p className={styles.courses}>{items}</p>
                            </li>
                ))}
            </div>
        </div>
            
        </div>
    )
}

export default Work
