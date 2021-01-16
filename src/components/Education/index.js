/* eslint-disable no-sequences */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import styles from './Education.module.css'

const Education=({degree, title, institute, year, courses})=> {
    return (
        <div>

        <div className={styles.main}>
            <div className={styles.titleItem}>
                <FontAwesomeIcon className={styles.icon, styles.bIcon} icon={faGraduationCap} />
                <p className={ styles.bText}>{`${degree} | ${title}`}</p>
            </div>

            <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faUniversity} />
                    <p className={styles.text}>{`${institute} | ${year}`}</p>
            </div>

            <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faListUl} />
                    <p className={styles.courses}> {courses}</p>
            </div>
        </div>
          
        </div>
    )
}

export default Education
