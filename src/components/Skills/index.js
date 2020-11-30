import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faUikit } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import redux from '../../assets/redux.svg'
import materialUi from '../../assets/material-ui.svg'
import typeScript from '../../assets/typescript-icon.svg'
import styles from './Skills.module.css'


const Skills = ({ data }) => {
    
    console.log('xxxx--', data)
    return (

        <div className={styles.main}>
            <div className={styles.titleItem}>
                <FontAwesomeIcon className={styles.icon, styles.bIcon} icon={faDesktop} />
                <p className={styles.bText}>{ data.stack}</p>
            </div>

            <div className={styles.techs}>
                {data.techs.map((item) => (
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon3} icon={item.icon} />
                        <h5 className={styles.text}>{item.tech}</h5>    
                </div>
                ))}

                {/* <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon2} icon={faMobileAlt} />
                    <h5 className={styles.text}>Responsiveness</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon} icon={faCss3Alt} />
                    <h5 className={styles.text}>CSS</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon2} icon={faHtml5} />
                    <h5 className={styles.text}>HTML</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon} icon={faJsSquare} />
                    <h5 className={styles.text}>JavaScript</h5>    
                </div>
                <div className={styles.tech}>
                    <img className={styles.img} src={materialUi} alt="material ui"/>
                    <h5 className={styles.text}>Material-UI</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon, styles.icon} icon={faReact} />
                    <h5 className={styles.text}>React</h5>    
                </div>
                <div className={styles.tech}>
                    <img className={styles.img} src={redux} alt="material ui"/>
                    <h5 className={styles.text}>Redux</h5>    
                </div>
                <div className={styles.tech}>
                    <FontAwesomeIcon className={styles.icon3} icon={faSass} />
                    <h5 className={styles.text}>SCSS</h5>    
                </div>
                <div className={styles.tech}>
                    <img className={styles.img} src={typeScript} alt="material ui"/>
                    <h5 className={styles.text}>TypeScript</h5>    
                </div>              */}
                
            </div>
        </div>
    )
}

export default Skills
