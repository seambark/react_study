import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>
                    <i className="fas fa-leaf logo"></i>
                    Habit Tracker
                    <span className="header-count">{this.props.totalCount}</span>
                </h1>
            </header>
        );
    }
}

export default Header;