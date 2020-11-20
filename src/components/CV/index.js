import React from 'react'

import Education from '../Education'
import styles from './Ux.module.css'

const CV =()=> {
    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Curriculum Vitae</h1>
            <div>
            <Education/>
            </div>
        </div>
    )
}

export default CV
