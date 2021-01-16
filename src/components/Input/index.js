import React from 'react'

import styles from './Input.module.css'

const Input = ({ handleChange, labelText, placeholder, type, name}) => {
    return (
        <div className={styles.inputDiv}>
            <label className={styles.label} >{labelText}</label>
            <input onChange={handleChange} name={name} type={type} placeholder={placeholder} className={styles.input} />
        </div>
    )
}

export default Input
