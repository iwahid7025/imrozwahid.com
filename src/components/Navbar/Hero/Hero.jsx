import React from 'react';

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Imroz</h1>
            <p className={styles.description}>
                With over three years in the software industry, I have a robust foundation in software development and testing. I have two years of hands-on experience as a Software Engineer at BlackBerry, where I worked extensively with the BlackBerry IVY product. Additionally, I have gained valuable experience as a Software Engineer at Tantalus Systems and as an R&D Engineer at Napoleon. I hold a Bachelor's degree in Electrical Engineering from Ontario Tech University, further enhancing my technical expertise.
            </p>
            <a href='mailto:iwahid@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>;
};