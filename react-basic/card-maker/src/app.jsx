import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ FileInput, authService }) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker FileInput={FileInput} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
