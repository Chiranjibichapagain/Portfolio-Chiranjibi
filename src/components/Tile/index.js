import React from 'react'

import styles from './Tile.module.css'

const Tile=({image, name})=> {
    return (
        <div className={styles.tile}>
            <img className={styles.image} src={image} alt="project picture" />
            {/* <div className={styles.nameDiv}> */}
                <h5 className={styles.name}>{name}</h5>
            {/* </div> */}
        </div>
    )
}

export default Tile
