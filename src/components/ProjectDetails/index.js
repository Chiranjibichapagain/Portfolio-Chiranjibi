import React from 'react'

import styles from './ProjectDetails.module.css'
import demo from '../../assets/super.png'

const ProjectDetails=()=> {
    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>This is product details page....</h1>
            <div className={styles.block} >
                <div className={styles.imgDiv}>
                    <img className={styles.image} src={demo} alt="phone" />
                </div>
                <div className={styles.textDiv}>
                    <h3 className={styles.subHead}>This is heading</h3>
                    <p className={styles.texts} >Nunc mollis lorem et felis rutrum convallis. Etiam ultricies euismod arcu id ornare. Vestibulum a dignissim ante. Curabitur consectetur arcu sit amet luctus dictum. Aliquam porttitor mollis ultricies. Cras et placerat odio. Donec et volutpat nisl. Pellentesque lacus felis, venenatis et laoreet tempus, porta et orci. Maecenas ac elit urna. Ut posuere metus dui, sit amet bibendum odio posuere quis. Suspendisse quis hendrerit ante, sed sagittis odio. Suspendisse facilisis, dui vitae blandit posuere, lectus nibh bibendum dolor, ac mollis sem felis ac mi. Praesent sed lacus in metus varius tincidunt.</p>
                </div>
            </div>
             <hr/>
            <div className={styles.block} >
                <div className={styles.textDiv}>
                    <h3 className={styles.subHead}>This is heading</h3>
                    <p className={styles.texts} >Nunc mollis lorem et felis rutrum convallis. Etiam ultricies euismod arcu id ornare. Vestibulum a dignissim ante. Curabitur consectetur arcu sit amet luctus dictum. Aliquam porttitor mollis ultricies. Cras et placerat odio. Donec et volutpat nisl. Pellentesque lacus felis, venenatis et laoreet tempus, porta et orci. Maecenas ac elit urna. Ut posuere metus dui, sit amet bibendum odio posuere quis. Suspendisse quis hendrerit ante, sed sagittis odio. Suspendisse facilisis, dui vitae blandit posuere, lectus nibh bibendum dolor, ac mollis sem felis ac mi. Praesent sed lacus in metus varius tincidunt.</p>
                </div>
                <div className={styles.imgDiv}>
                    <img className={styles.image} src={demo} alt="phone" />
                </div>
            </div>
            <hr/>
            <div className={styles.block} >
                <div className={styles.imgDiv}>
                    <img className={styles.image} src={demo} alt="phone" />
                </div>
                <div className={styles.textDiv}>
                    <h3 className={styles.subHead}>This is heading</h3>
                    <p className={styles.texts} >Nunc mollis lorem et felis rutrum convallis. Etiam ultricies euismod arcu id ornare. Vestibulum a dignissim ante. Curabitur consectetur arcu sit amet luctus dictum. Aliquam porttitor mollis ultricies. Cras et placerat odio. Donec et volutpat nisl. Pellentesque lacus felis, venenatis et laoreet tempus, porta et orci. Maecenas ac elit urna. Ut posuere metus dui, sit amet bibendum odio posuere quis. Suspendisse quis hendrerit ante, sed sagittis odio. Suspendisse facilisis, dui vitae blandit posuere, lectus nibh bibendum dolor, ac mollis sem felis ac mi. Praesent sed lacus in metus varius tincidunt.</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
