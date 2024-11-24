import React from 'react'
function ProgressBar(props) {
const pro={
    backgroundColor:'#f70776',
    width:`${props.width}%`,
    
}
    
    return ( 
        <div >
      
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100} style={{width:'60vw'}}>
          <div className="progress-bar"  style={pro} >{props.name}   {props.width}%</div>
        </div>
       
      </div>
      
     );
}

export default ProgressBar;