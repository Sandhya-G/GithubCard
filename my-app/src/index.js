import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import Footer from './Footer'
import * as serviceWorker from './serviceWorker';

function Display()
{
	return(<div className="App">
				<div><Header /></div>
				<div><App /></div>
			</div>
			);
}
ReactDOM.render(<Display />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
