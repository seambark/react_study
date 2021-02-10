import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const history = useHistory();
    const goToMaker = userId => {
        history.push({
            pathname: '/maker',
            state: { id: userId },
        });
    };
    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToMaker(user.id);
        });
    });

    return (
        <div className={styles.loginArea}>
            <Header />
            <div className={styles.content}>
                <h3>Login</h3>
                <ul>
                    <li>
                        <button type="button" onClick={onLogin}>Google</button>
                    </li>
                    <li>
                        <button type="button" onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Login;