import React from 'react';
import styles from './card_preview.module.css';

const CardPreview = props => {
    return (
        <section className={styles.cardPreview}>
            <h2 className={styles.conTit}>Card Preview</h2>
        </section>
    );
};

export default CardPreview;