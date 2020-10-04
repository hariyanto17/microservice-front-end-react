import React from 'react';
import {createBrowserHistory} from 'history'
import {Router, Route, Switch} from 'react-router-dom'

import 'assets/css/style.css';

import MemberRoute from 'components/Routes/MemberRoute'
import GuestRoute from 'components/Routes/GuestRoute'

import Login from 'pages/Login'
import Register from 'pages/Register'
import Unautenticated from 'pages/401'
import NotFound from 'pages/404'
import MyClass from 'pages/MyClass';


function App() {

  const history = createBrowserHistory({basename: process.env.PUBLIC_URL})

  return (
    <>
      <Router history={history} >
        <Switch>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <GuestRoute path="/private" component={Unautenticated} />
          <MemberRoute exact path="/" component={MyClass} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
