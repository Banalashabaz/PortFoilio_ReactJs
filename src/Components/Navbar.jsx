import React from 'react'
function Navbar(props) {

    return ( 
      <>
      
      <button id="button"><a href={props.link}>{props.name}</a></button>
  {console.log(props.link)}
 </>
    
     );
}

export default Navbar;