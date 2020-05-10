import React from 'react';

import styles from './loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.ballWrapper}>
                <div className={styles.ballHolder}>
                    <div className={styles.ball}></div>
                </div>
                <div className={styles.shadow}></div>
            </div>
            <div className={styles.ballWrapper}>
                <div className={styles.ballHolder}>
                    <div className={styles.ball}></div>
                </div>
                <div className={styles.shadow}></div>
            </div>
            <div className={styles.ballWrapper}>
                <div className={styles.ballHolder}>
                    <div className={styles.ball}></div>
                </div>
                <div className={styles.shadow}></div>
            </div>
        </div>
    )
}

export default Loader;