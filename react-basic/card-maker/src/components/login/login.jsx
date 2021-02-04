import React from 'react';
import styles from './login.module.css'

const Login = props => (
    <div className={styles.loginArea}>
        <header>
            <img src="/images/logo.png" alt=""/>
            <h2>Business Card Maker</h2>
        </header>
        <div className={styles.content}>
            <h3>Login</h3>
            <ul>
                <li><button type="button">Google</button></li>
                <li><button type="button">Github</button></li>
            </ul>
        </div>
        <footer>
            <p>Code your dream</p>
        </footer>
    </div>
);

export default Login;