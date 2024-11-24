import React from 'react'
function Emojis(props) {
    const data={

    }
    return ( 
        <div style={{display:'flex',flexDirection:'column',width:'300px'}}>
           <i className={ `${props.image}`} style={{ color: "grey",marginBottom:'30px' }} />
            <button style={{height:'40px',backgroundColor:'grey',fontSize:'20px',color:'white',border:'none',transform:'skewX(-10deg)'}} >{props.name}</button>
        </div>
     );
}

export default Emojis;