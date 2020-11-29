import React, {useState} from 'react'

import cvData from '../../data'
import Education from '../Education'
import Work from '../Work'
import Trainings from '../Trainings'
import Skills from '../Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import styles from './Ux.module.css'
import classes from './Ux.module.css'

const CV = () => {
    const [edu, setEdu] = useState(true)
    const [work, setWork] = useState(false)
    const [trainings, setTrainings] = useState(false)
    const [skills, setSkills] = useState(false)


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
            <div className={styles.sections}>

                <div onClick={handleEdu} className={edu === false ? styles.section : styles.sectionSelected}>
                    <p>Education </p>
                </div>
                <div onClick={handleEdu} className={edu === false ? styles.section : styles.sectionSelected}>
                    <p>Work Experiences </p>
                </div>
                <div onClick={handleEdu} className={edu === false ? styles.section : styles.sectionSelected}>
                    <p>Trainings </p>
                </div>
                <div onClick={handleEdu} className={edu === false ? styles.section : styles.sectionSelected}>
                    <p>Skills </p>
                </div>
            </div>

            <div className={styles.detailView}>
                <div className={edu === false ? styles.hide : styles.show}>
                    <h3 className={styles.title}>Education</h3>
                    {cvData.education.map((item) => (
                    <Education degree={item.degree} title={item.title} institute={item.institute} year={item.year} courses={item.courses} />
                    ))}
                </div>

                <div className={work===false?styles.hide:styles.show}>
                    <h3 className={styles.title}>Work Experiences</h3>
                    {cvData.workExperiences.map((item) => (
                    <Work title={item.title} company={item.company} location={item.location} date={item.date} tasks={item.tasks} />
                    ))}
                </div>

                <div className={trainings===false?styles.hide:styles.show}>
                    <h3 className={styles.title}>Trainings and Certifications</h3>
                    <Trainings/>
                </div>
               
                <div className={skills===false?styles.hide:styles.show}>
                    <h3 className={styles.title}>Skills</h3>
                    <Trainings/>
                </div>
            </div>

        </div>
    )
}

export default CV
