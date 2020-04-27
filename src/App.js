import React from 'react';
import { Main } from './components/Main';
import { Home } from './components/landing/Home';
import { Register } from './components/landing/Register';
import { Login } from './components/landing/Login';
import { AuthProvider } from './context';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <AuthProvider>
          <Route path="/app" component={Main} />
          <Route path="/users/showRegister" component={Register} />
          <Route path="/users/showLogin" component={Login} />
        </AuthProvider>
      </Switch>
    </Router>
  );
};
