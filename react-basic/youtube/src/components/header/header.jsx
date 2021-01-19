import React, { memo, useRef } from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = memo(({onSearch}) => {
    const searchValue = useRef();

    const handleSearch = () => {
        const search = searchValue.current.value;
        onSearch(search);
    };
    const onClick = () => {
        handleSearch();
    };
    const onKeyPress = event => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    };

    return (
        <header>
            <h1 className={styles.logo}><FontAwesomeIcon icon={faYoutube}/>Youtube</h1>
            <div className={styles.search_box}>
                <input type="search" ref={searchValue} onKeyPress={onKeyPress}/>
                <button type="submit" onClick={onClick}><FontAwesomeIcon icon={faSearch} />검색</button>
            </div>
        </header>
    );
});

export default Header;