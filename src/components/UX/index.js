import React from 'react'

import Tile from '../Tile'
import Mobile from '../../assets/mobile.png'
import styles from './Ux.module.css'

const UX =()=> {
    return (
        <div className={styles.main}>
            <h1 className={styles.heading}> UX/UI Projects</h1>  
            <div className={styles.projects}>
            <Tile image={Mobile} name="Mass Calculation App" />
            <Tile image={Mobile} name="Mass Calculation App" />
            <Tile image={Mobile} name="Mass Calculation App" />
            <Tile image={Mobile} name="Mass Calculation App" />
            <Tile image={Mobile} name="Mass Calculation App" />
            <Tile image={Mobile} name="Mass Calculation App" />
            </div>
        </div>
    )
}

export default UX
