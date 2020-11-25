import React, {useState} from 'react'

import cvData from '../../data'
import Education from '../Education'
import Work from '../Work'
import Trainings from '../Trainings'
import Skills from '../Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import styles from './Ux.module.css'

const CV = () => {
    const [edu, setEdu] = useState(false)
    const [work, setWork] = useState(false)
    const [trainings, setTrainings] = useState(false)
    const [skills, setSkills] = useState(false)

    console.log('xxx', cvData)

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
    const handleTrainings = () => {
        if (trainings === false) {
            setTrainings(true)
        } else {
            setTrainings(false)
        }
    }
    const handleSkills = () => {
        if (skills === false) {
            setSkills(true)
        } else {
            setSkills(false)
        }
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Curriculum Vitae</h1>
            <div className={styles.section}>
                <div className={styles.titleDiv}>
                    <h3 className={styles.title}>Education</h3>
                    <FontAwesomeIcon  onClick={handleEdu} className={styles.down} icon={faAngleDown} />
                </div>
                <div className={edu === false ? styles.hide : styles.show}>
                    {cvData.education.map((item) => (
                    <Education degree={item.degree} title={item.title} institute={item.institute} year={item.year} courses={item.courses} />
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.titleDiv}>
                    <h3 className={styles.title}>Work Experiences</h3>
                    <FontAwesomeIcon  onClick={handleWork} className={styles.down} icon={faAngleDown} />
                </div>
                <div className={work===false?styles.hide:styles.show}>
                    <Work/>
                </div>
            </div>
            
            <div className={styles.section}>
                <div className={styles.titleDiv}>
                    <h3 className={styles.title}>Trainings and Certifications</h3>
                    <FontAwesomeIcon  onClick={handleTrainings} className={styles.down} icon={faAngleDown} />
                </div>
                <div className={trainings===false?styles.hide:styles.show}>
                    <Trainings/>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.titleDiv}>
                    <h3 className={styles.title}>Skills</h3>
                    <FontAwesomeIcon  onClick={handleSkills} className={styles.down} icon={faAngleDown} />
                </div>
                <div className={skills===false?styles.hide:styles.show}>
                    <Trainings/>
                </div>
            </div>
        </div>
    )
}

export default CV
