import React from 'react';
import styles from './header.module.css';

const Header = props => (
<header>
    <h1 className={styles.logo}><i className="fab fa-youtube"></i>Youtube</h1>
    <div className={styles.search_box}>
        <input type="search"/>
        <button><i className="fas fa-search"></i>검색</button>
    </div>
</header>
);

export default Header;