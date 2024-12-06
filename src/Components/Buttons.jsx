import React from 'react';
function Buttons() {
    const style1={
        width:"max-content",
        paddingLeft:"30px",
        paddingRight:"30px",
        fontSize:"25px",
        backgroundColor:"#f70776",
        border:"none",
        color:"white",
        padding:"10px",
        marginTop:"70px",
        transform:"skew(-10deg)",
        transition:"transform linear 0.3s",
        
    }
   
    const style2={
        width:"max-content",
        paddingLeft:"30px",
        paddingRight:"30px",
        fontSize:"20px",
        fontWeight:"bold",
        border:"2px solid black ",
    
        padding:"10px",
        marginTop:"100px"
    }
    return ( 
        <>
         <button id="bt1 " style={style1}  >Shabaz Ali</button><br></br>
         <button  id="bt2 " style={style2}>Projects</button>
        </>
     );
}

export default Buttons;