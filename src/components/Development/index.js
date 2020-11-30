import React from 'react'
import {useHistory} from 'react-router-dom'

import Tile from '../Tile'
import Mobile from '../../assets/mobile.png'
import styles from './Dev.module.css'

const Development = () => {
    const history = useHistory()
    
    const handleClick = () => {
      history.push('/projects')  
    }

    return (
         <div className={styles.main}>
            <h1 className={styles.heading}>Web Development Projects</h1>  
            <div className={styles.projects}>
            <Tile handleClick={handleClick} image={Mobile} name="Mass Calculation App" />
            </div>
        </div>
    )
}

export default Development
