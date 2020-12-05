import React from 'react'
import {useHistory} from 'react-router-dom'

import styles from './ProjectDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import demo from '../../assets/super.png'

const ProjectDetails = () => {
    const history=useHistory()
    const handleClick = () => {
        history.push("/development")
    }

    return (
        <div className={styles.main}>
            <FontAwesomeIcon onClick={handleClick} className={styles.arrow} icon={faArrowLeft} />
            <h1 className={styles.heading}>This is product details page....</h1>
            <div className={styles.block} >
                <div className={styles.imgDiv}>
                    <img className={styles.image} src={demo} alt="phone" />
                </div>
                <div className={styles.textDiv}>
                    <h3 className={styles.subHead}>This is heading</h3>
                    <p className={styles.texts} >Nunc mollis lorem et felis rutrum convallis. Etiam ultricies euismod arcu id ornare. Vestibulum a dignissim ante. Curabitur consectetur arcu sit amet luctus dictum. Aliquam porttitor mollis ultricies. Cras et placerat odio. Donec et volutpat nisl. Pellentesque lacus felis, venenatis et laoreet tempus, porta et orci. Maecenas ac elit urna. Ut posuere metus dui, sit amet bibendum odio posuere quis. Suspendisse quis hendrerit ante, sed sagittis odio. Suspendisse facilisis, dui vitae blandit posuere, lectus nibh bibendum dolor, ac mollis sem felis ac mi. Praesent sed lacus in metus varius tincidunt.</p>
                    <a hef="#"><button className={styles.button} >view app</button></a>
                </div>
            </div>
             <hr/>
            <div className={styles.block}>
                <div className={styles.imgDiv2}>
                    <img className={styles.image2} src={demo} alt="phone" />
                </div>
                <div className={styles.imgDiv2}>
                    <img className={styles.image2} src={demo} alt="phone" />
                </div>
            </div>
           
        </div>
    )
}

export default ProjectDetails
