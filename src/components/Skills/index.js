import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Skills.module.css'

const Skills = ({ data }) => {
    return (
        <div className={styles.main}>
            <div className={styles.titleItem}>
                <img className={styles.bImg} src={data.icon} alt={data.stack}/>
                <p className={styles.bText}>{ data.stack}</p>
            </div>

            <div className={styles.techs}>
                {data.techs.map((item) => (
                 item.type==="fontawesome"?   
                <div key={item.tech} className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon3} icon={item.icon} />
                    <h5 className={styles.text}>{item.tech}</h5>    
                </div>:
                <div key={item.tech} className={styles.tech}>
                    <img className={styles.img} src={item.icon} alt="material ui"/>
                    <h5 className={styles.text}>{item.tech}</h5>    
                </div>
                ))}               
                
            </div>
        </div>
    )
}

export default Skills
