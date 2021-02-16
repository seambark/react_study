import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
    return (
        <section className={styles.cardMaker}>
             <h2 className={styles.conTit}>Card Maker</h2>
             {cards.map(card => (
                <CardEditForm card={card} />
            ))}
        </section>
    );
};

export default Editor;