import React, {useState} from 'react'

import Education from '../Education'
import Work from '../Work'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import styles from './Ux.module.css'

const CV = () => {
    const [edu, setEdu] = useState(false)
    const [work, setWork] = useState(false)

    const handleEdu = () => {
        if (edu === false) {
            setEdu(true)
        } else {
            setEdu(false)
        }
    }
    const handleWork = () => {
        if (work === false) {
            setWork(true)
        } else {
            setWork(false)
        }
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Curriculum Vitae</h1>
            <div className={styles.section}>
                <div className={styles.titleDiv}>
                    <h2 className={styles.title}>Education</h2>
                    <FontAwesomeIcon  onClick={handleEdu} className={styles.down} icon={faAngleDown} />
                </div>
                <div className={edu===false?styles.hide:styles.show}>
                    <Education />
                </div>
                 
            </div>
            <div className={styles.section}>
                <div className={styles.titleDiv}>
                    <h2 className={styles.title}>Work Experiences</h2>
                    <FontAwesomeIcon  onClick={handleWork} className={styles.down} icon={faAngleDown} />
                </div>
                <div className={work===false?styles.hide:styles.show}>
                    <Work/>
                </div>
            </div>
        </div>
    )
}

export default CV
