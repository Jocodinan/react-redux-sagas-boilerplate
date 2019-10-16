import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime";
import store from './store'; 
import App from './wrappers/app/app';

window.ReactMainApp = {
	mount: (props = {}, container = "app") => {
		ReactDOM.render(
			<Provider store={ store(props) }>
				<App />
			</Provider>,
			document.getElementById(container)
		);
	},
	unmount: (container = "app") => {
			ReactDOM.unmountComponentAtNode(container);
	}
}

if (process.env.NODE_ENV !== 'production')
	ReactMainApp.mount();

