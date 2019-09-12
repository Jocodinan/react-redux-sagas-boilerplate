import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './home';

const Router = (props) => {
	return (
		<BrowserRouter>
			<Route key="index" exact path='/' render={(routerProps) => { return <Home {...props} {...routerProps} /> }} />
		</BrowserRouter>
	);
};

export default Router;