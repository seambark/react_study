import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => (
    <header>
        { onLogout && <button className={styles.btnLogout} onClick={onLogout}>Logout</button> }
        <img src="/images/logo.png" alt=""/>
        <h2>Business Card Maker</h2>
    </header>
);

export default Header;