import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
    return <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt='Me sitting with a laptop'
                className={styles.aboutImage} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursorIcon.png")}
                        alt='Cursor icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Software Test Developer</h3>
                        <p>Over three years of industry experience in testing software products.</p> 
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/serverIcon.png")}
                        alt='Server icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Full-Stack Developer</h3>
                        <p>Experienced full-stack web developer proficient in ReactJS, NodeJS, HTML, CSS, MySQL, and RESTful APIs, with a strong track record of delivering robust and scalable web applications.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/uiIcon.png")}
                        alt='UI icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Game Developer</h3>
                        <p>Proficient in game development using Unity and C#, with strong skills in creating engaging and interactive gaming experiences.</p> 
                    </div>
                </li>
            </ul>
        </div>
    </section>
}