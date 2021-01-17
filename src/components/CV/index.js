import React, {useState} from 'react'

import cvData from '../../data'
import Education from '../Education'
import Work from '../Work'
import Trainings from '../Trainings'
import Skills from '../Skills'
import styles from './Ux.module.css'

const CV = () => {
    const [edu, setEdu] = useState(true)
    const [work, setWork] = useState(false)
    const [trainings, setTrainings] = useState(false)
    const [skills, setSkills] = useState(false)

    const handleEdu = () => {
        if (edu === false) {
            setEdu(true)
            setWork(false)
            setTrainings(false)
            setSkills(false)
        } else {
            setEdu(true)
        }
    }
    const handleWork = () => {
        if (work === false) {
            setWork(true)
            setEdu(false)
            setTrainings(false)
            setSkills(false)
        } else {
            setWork(false)
        }
    }
    const handleTrainings = () => {
        if (trainings === false) {
            setTrainings(true)
            setEdu(false)
            setWork(false)
            setSkills(false)
        } else {
            setTrainings(false)
        }
    }
    const handleSkills = () => {
        if (skills === false) {
            setSkills(true)
            setEdu(false)
            setWork(false)
            setTrainings(false)
        } else {
            setSkills(false)
        }
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Curriculum Vitae</h1>
            <div className={styles.sections}>

                <div onClick={()=>handleEdu()} className={edu === false ? styles.section : styles.sectionSelected}>
                    <p>Education </p>
                </div>
                <div onClick={()=>handleWork()} className={work === false ? styles.section : styles.sectionSelected}>
                    <p>Work Experiences </p>
                </div>
                <div onClick={()=>handleTrainings()} className={trainings === false ? styles.section : styles.sectionSelected}>
                    <p>Trainings </p>
                </div>
                <div onClick={()=>handleSkills()} className={skills === false ? styles.section : styles.sectionSelected}>
                    <p>Skills </p>
                </div>
            </div>

            <div className={styles.detailView}>
                <hr/>
                <div className={edu === false ? styles.hide : styles.show}>
                    <h3 className={styles.title}>Education</h3>
                    {cvData.education.map((item) => (
                    <Education key={item.title} degree={item.degree} title={item.title} institute={item.institute} year={item.year} courses={item.courses} />
                    ))}
                </div>

                <div className={work===false?styles.hide:styles.show}>
                    <h3 className={styles.title}>Work Experiences</h3>
                    {cvData.workExperiences.map((item) => (
                    <Work key={item.title} title={item.title} company={item.company} location={item.location} date={item.date} tasks={item.tasks} />
                    ))}
                </div>

                <div className={trainings===false?styles.hide:styles.show}>
                    <h3 className={styles.title}>Trainings and Certifications</h3>
                    {cvData.trainings.map((item) => (
                    <Trainings key={item.title} title={item.title} institute={item.institute} date={item.date} subjects={item.subjects} />
                    ))}
                </div>
               
                <div className={skills===false?styles.hide:styles.show}>
                    <h3 className={styles.title}>Tech Skills</h3>
                    {cvData.skills.tech.map((item) => (
                    <Skills key={item.stack} data= {item} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CV
