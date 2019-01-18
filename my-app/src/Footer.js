import React from 'react';

function Footer(props) {
    // condition ? statement if true : statement if false 
    console.log("footer")
    console.log(props)
    if(props.data)
        return (
            <div>
           { console.log(props.data)}
            </div>
        )
    return (
       <div>console.log(props)</div>
    )    
}

export default Footer;