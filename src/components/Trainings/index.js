/* eslint-disable no-sequences */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import styles from './Training.module.css'

const Trainings=({title, institute, date, subjects})=> {
    return (
        <div>

        <div className={styles.main}>
            <div className={styles.titleItem}>
                <FontAwesomeIcon className={styles.icon, styles.bIcon} icon={faGraduationCap} />
                    <p className={styles.bText}>{title}</p>
            </div>

            <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faUniversity} />
                <p className={styles.text}>{`${institute} | ${date}`}</p>
            </div>

            <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faListUl} />
                    <p className={styles.courses}>{subjects}</p>
            </div>
        </div>
        </div>
    )
}

export default Trainings
