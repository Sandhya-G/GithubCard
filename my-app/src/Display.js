import React from 'react';

function Display(props) {
    return (
      <div>{console.log(props.data)}
        <div> {props.data.login}</div>
                  <div>{props.data.public_repos}</div>
                  <div>{props.data.followers}</div>
                  <div>{props.data.following}</div>
                  <div><img src={props.data.avatar_url}/></div>
      </div>)
    
}

export default Display;



