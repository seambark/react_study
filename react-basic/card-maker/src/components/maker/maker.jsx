import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id:'1',
            name: 'Ellie',
            company: 'Samaung',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: './images/default_logo.png'
        },
        {
            id:'2',
            name: 'Bob',
            company: 'Uber',
            theme: 'light',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'I love coding',
            fileName: 'ellie',
            fileURL:'./images/default_logo.png'
        },
        {
            id:'3',
            name: 'Chris',
            company: 'Instagram',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL:'./images/default_logo.png'
        }
    ]);
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

    const addCard = (card) => {
        const updated = [...cards, card];
        setCards(updated);
    };

    return (
        <section className={styles.makerWrap}>
            <Header onLogout={onLogout} />
            <div className={styles.content} role="main">
                <Editor cards={cards} addCard={addCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;