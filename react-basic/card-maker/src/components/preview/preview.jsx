import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
    return (
        <section className={styles.cardPreview}>
            <h2 className={styles.conTit}>Card Preview</h2>
            <ul>
                {Object.keys(cards).map(key => (
                    <Card key={key} card={cards[key]} />
                ))}
            </ul>
        </section>
    );
};

export default Preview;