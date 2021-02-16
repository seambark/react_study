import React from 'react';
import styles from './card.module.css'

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({card}) => {
    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL
    } = card;
    const url = fileURL || DEFAULT_IMAGE;

    return(
        <li className={styles.cardList}>
            <div className={`${styles.card} ${getStyles(theme)}`}>
                <div className={styles.img}>
                    <img src={url} alt="profile photo"/>
                </div>
                <dl className={styles.txt}>
                    <dt className={styles.title}>{name}</dt>
                    <dd className={styles.line}>{company}</dd>
                    <dd>{title}</dd>
                    <dd>{email}</dd>
                    <dd>{message}</dd>
                </dl>
            </div>
        </li>
    );

    function getStyles(theme) {
        switch(theme) {
            case 'dark':
            return styles.dark;
            case 'light':
            return styles.light;
            case 'colorful':
                return styles.colorful;
                default:
                    throw new Error(`unknown theme: ${theme}`);

        }
    }
};

export default Card;