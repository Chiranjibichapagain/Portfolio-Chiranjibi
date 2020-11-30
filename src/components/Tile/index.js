import React from 'react'

import styles from './Tile.module.css'

const Tile=({image, name, handleClick})=> {
    return (
        <div onClick={handleClick} className={styles.tile}>
            <img className={styles.image} src={image} alt="project picture" />
                <h5 className={styles.name}>{name}</h5>
        </div>
    )
}

export default Tile
