import React from 'react'
function Projects(props) {
    //  var img="../public/images/IMG-20241124-WA0001.jpg";
    return ( 
        <div className="image">
          <img src={require(`${props.src}`)} alt=""  width="400px" height="200px" id="proimg" ></img>
          <div id="data">
           Visit my Project <br />
           <btn ><i className="fa-solid fa-eye fa-2x"></i></btn>
          </div>
         
         {console.log(props.src)} 
     
         </div>
     );
}

export default Projects;