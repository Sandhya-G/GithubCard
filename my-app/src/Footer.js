import React from 'react';

function Footer(props) {
    return (
    	<div>{console.log(props.data)}
    		<div> {props.data.username}</div>
                  <div>{props.data.rep}</div>
                  <div>{props.data.followers}</div>
                  <div>{props.data.following}</div>
                  <div><img src={props.data.image}/></div>
    	</div>)
    
}

export default Footer;