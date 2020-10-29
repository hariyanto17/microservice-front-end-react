import React, {useEffect} from 'react';
import {createBrowserHistory} from 'history'
import {Router, Route, Switch} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setAutorizationHeader } from "configs/axios";

import 'assets/css/style.css';

import MemberRoute from 'components/Routes/MemberRoute'
import GuestRoute from 'components/Routes/GuestRoute'

import Login from 'pages/Login'
import Register from 'pages/Register'
import Unautenticated from 'pages/401'
import NotFound from 'pages/404'
import MyClass from 'pages/MyClass';
import Joined from 'pages/Joined';
import DetailsClass from 'pages/DetailsClass';
import Settings from 'pages/Settings';
import Transactions from 'pages/Transactions';




import users from "constants/api/Users";
import { populateProfile } from "store/actions/users";


function App() {

  const dispatch = useDispatch()  
  const history = createBrowserHistory({basename: process.env.PUBLIC_URL})
  
  useEffect(() => {
    let session = null
    if(localStorage.getItem("MICRO:token")){
      session = JSON.parse(localStorage.getItem("MICRO:token"))
      setAutorizationHeader(session.token)
      users.details().then( details => {
        dispatch(populateProfile(details.data))
      })
    }
  }, [dispatch])

  return (
    <>
      <Router history={history} >
        <Switch>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <GuestRoute path="/private" component={Unautenticated} />


          <MemberRoute exact path="/" component={MyClass} />
          <MemberRoute  path="/settings" component={Settings} />
          <MemberRoute  path="/transactions" component={Transactions} />
          <MemberRoute path="/joined/:class" component={Joined} />
          <MemberRoute path="/courses/:class/:chapter/:uid" component={DetailsClass} />
          <MemberRoute path="/courses/:class" component={DetailsClass} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
