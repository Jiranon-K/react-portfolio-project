import React from 'react'
import styles from './Portfolio.module.css'
import { Tilt } from 'react-tilt'

function Portfolio() {
    return (
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>Portfolio</h3>
            <div className={styles.port_list}>
                <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_item}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
