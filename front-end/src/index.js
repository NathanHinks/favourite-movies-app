import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Auth0Provider
		domain={process.env.REACT_APP_DOMAIN_AUTH}
		clientId={process.env.REACT_APP_CLIENT_ID}
		redirectUri={window.location.origin}
	>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
