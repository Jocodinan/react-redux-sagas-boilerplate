import React, { Fragment } from 'react';
import Header from '../header';
import MainContent from '../main-content';
import Footer from '../footer';

const Home = (props) => (
	<Fragment>
		<Header { ...props } />
		<MainContent { ...props } />
		<Footer {  ...props } />
	</Fragment>	
);

export default Home;