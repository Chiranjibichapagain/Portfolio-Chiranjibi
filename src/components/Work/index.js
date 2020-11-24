import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import styles from './Work.module.css'

const Work=()=> {
    return (
        <div>

        <div className={styles.main}>
            <div className={styles.titleItem}>
                <FontAwesomeIcon className={styles.icon, styles.bIcon} icon={faGraduationCap} />
                <p className={ styles.bText}>Master's Degree | Innovative Governance and Public Management</p>
            </div>

            <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faUniversity} />
                <p className={styles.text}>Tampere University (2017 - 2019)</p>
            </div>

            <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faListUl} />
                <p className={styles.courses}>Design Thinking, innovations and ecosystems, Organizational change and change management,
                    Governance, Leadership in public organizations, Industrial Development </p>
            </div>
        </div>
            
        <div className={styles.main}>
            <div className={styles.titleItem}>
                <FontAwesomeIcon className={styles.icon, styles.bIcon} icon={faGraduationCap} />
                <p className={ styles.bText}>Master's Degree | Innovative Governance and Public Management</p>
            </div>

            <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faUniversity} />
                <p className={styles.text}>Tampere University (2017 - 2019)</p>
            </div>

            <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faListUl} />
                <p className={styles.courses}>Design Thinking, innovations and ecosystems, Organizational change and change management,
                    Governance, Leadership in public organizations, Industrial Development </p>
            </div>
        </div>
        
        </div>
    )
}

export default Work
