import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css'

const Login = ({authService}) => {
    const onLogin = event => {
        authService.login(event.currentTarget.textContent).then(console.log);
    };
    return (
        <div className={styles.loginArea}>
            <Header />
            <div className={styles.content}>
                <h3>Login</h3>
                <ul>
                    <li><button onClick={onLogin}>Google</button></li>
                    <li><button onClick={onLogin}>Github</button></li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Login;