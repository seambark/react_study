import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
    const [cards, setCards] = useState({
        '1': {
            id:'1',
            name: 'Ellie',
            company: 'Samaung',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: '',
            fileURL: ''
        },
        '2': {
            id:'2',
            name: 'Bob',
            company: 'Uber',
            theme: 'light',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'I love coding',
            fileName: '',
            fileURL:''
        },
        '3': {
            id:'3',
            name: 'Chris',
            company: 'Instagram',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: '',
            fileURL:''
        }
    });
    
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect (() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    });

    const creatOrUpdateCard = card => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    };
    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <section className={styles.makerWrap}>
            <Header onLogout={onLogout} />
            <div className={styles.content} role="main">
                <Editor FileInput={FileInput} cards={cards} addCard={creatOrUpdateCard} updateCard={creatOrUpdateCard} deleteCard={deleteCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;