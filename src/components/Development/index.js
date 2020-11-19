import React from 'react'

import Tile from '../Tile'
import Mobile from '../../assets/mobile.png'
import styles from './Dev.module.css'

const Development =()=> {
    return (
         <div className={styles.main}>
            <h1 className={styles.heading}>Web Development Projects</h1>  
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

export default Development
