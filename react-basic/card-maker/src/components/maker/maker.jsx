import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import CardMaker from './card_maker';
import CardPreview from './card_preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
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

    return (
        <section className={styles.makerWrap}>
            <Header onLogout={onLogout} />
            <div className={styles.content} role="main">
                <CardMaker />
                <CardPreview />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;