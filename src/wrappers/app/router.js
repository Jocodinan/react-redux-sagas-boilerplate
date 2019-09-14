import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Search from '../search';
import Dashboard from '../dashboard';
import List from '../list';

const Router = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route key="index" exact path='/' render={(routerProps) => { return <Search {...props} {...routerProps} /> }} />
				<Route key="index" exact path='/reserva' render={(routerProps) => { return <Dashboard {...props} {...routerProps} /> }} />
				<Route key="index" exact path='/list' render={(routerProps) => { return <List {...props} {...routerProps} /> }} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;