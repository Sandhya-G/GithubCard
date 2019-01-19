import React from 'react';
import logo from './logo.svg';
import './App.css';
function Header()
{
	return (
	<div class="center">
    	
    		<img className="App-logo" src={logo} alt="logo"/>
    		 <div className="header" >Github Details </div>
    </div>
			);
}

export default Header;