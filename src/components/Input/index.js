import React from 'react'

import styles from './Input.module.css'

const Input = ({labelText, placeholder, type}) => {
    return (
        <div className={styles.inputDiv}>
            <label className={styles.label} >{labelText}</label>
            <input type={type} placeholder={placeholder} className={styles.input} />
        </div>
    )
}

export default Input
