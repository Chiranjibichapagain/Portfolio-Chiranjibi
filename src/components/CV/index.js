import React, {useState} from 'react'

import Education from '../Education'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import styles from './Ux.module.css'

const CV = () => {
    const [edu, setEdu] = useState(false)

    const handleEdu = () => {
        if (edu === false) {
            setEdu(true)
        } else {
            setEdu(false)
        }
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Curriculum Vitae</h1>
            <div className={styles.education}>
                <div className={styles.titleDiv}>
                    <h2 className={styles.title}>Education</h2>
                    <FontAwesomeIcon  onClick={handleEdu} className={styles.down} icon={faAngleDown} />
                </div>
                <div className={edu===false?styles.hide:styles.show}>
                <Education/>
                </div>
            </div>
        </div>
    )
}

export default CV
