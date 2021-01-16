import React, { memo, useRef } from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = memo(props => {
    const formRef = useRef();
    const searchValue = useRef();

    const onSubmit = event => {
        event.preventDefault();
        const search = searchValue.current.value;
        console.log(search);
    }

    return (
        <header>
            <h1 className={styles.logo}><FontAwesomeIcon icon={faYoutube}/>Youtube</h1>
            <form className={styles.search_box} ref={formRef} onSubmit={onSubmit}>
                <input type="search" ref={searchValue}/>
                <button><FontAwesomeIcon icon={faSearch} />검색</button>
            </form>
        </header>
    );
});

export default Header;