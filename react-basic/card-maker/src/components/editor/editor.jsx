import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard }) => {
    return (
        <section className={styles.cardMaker}>
             <h2 className={styles.conTit}>Card Maker</h2>
             {cards.map(card => (
                <CardEditForm key={card.id} card={card} />
            ))}
            <CardAddForm onAdd={addCard} />
        </section>
    );
};

export default Editor;