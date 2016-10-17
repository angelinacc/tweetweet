import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Main from './components/Main.jsx';
import LogIn from './components/LogIn.jsx';
import Tweets from './components/Tweets.jsx';


export default (
	<Router history={hashHistory}>
    	<Route path="/" component={Main} />
    	<Route path="/login" component={LogIn} />
    	<Route path="/(:username)" component={Tweets} />
  	</Router>
);