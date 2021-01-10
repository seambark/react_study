import React, { memo } from 'react';

const Header = memo(props => {
    return (
        <header className="header">
            <h1>
                <i className="fas fa-leaf logo"></i>
                Habit Tracker
                <span className="header-count">{props.totalCount}</span>
            </h1>
        </header>
    );
});

export default Header;