
import './App.css';
import Header from './Components/header';
import Photo from './Components/Photo';
import Buttons from './Components/Buttons';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ProgressBar from './Components/ProgressBar';
import Emojis from './Components/Emojis';
import Myprojects from './Components/MyProjects';
import Projects from './Components/Projects';
import Contact from './Components/Contact_Details';
import Footers from './Components/Footers.jsx';
function App() {
 let btnnames=[{"name":"HOME","nav":"#page1"},{"name":"ABOUT","nav":"#progress"},{"name":"PORTFOLIO","nav":"#project"},{"name":"CONTACT","nav":"#contact"}];
 let pro=[{"width":"100","name":"HTML"},{"width":"95","name":"CSS"},{"width":"80","name":"JAVASCRIPT"},{"width":"85","name":"REACT"},{"width":"80","name":"JAVA"},{"width":"70",name:"MYSQL"}]
 let emojis=[{"name":"Creative", "image":"fa-regular fa-lightbulb  fa-10x"},{"name":"Problem Solving", "image":"fa-solid fa-scissors  fa-10x"},{"name":"Fast", "image":"fa-solid fa-gauge  fa-10x"},{"name":"Dynamic", "image":"fa-solid fa-rocket  fa-10x"}]
 let projects=[{ "src":"./images/IMG-20241124-WA0001.jpg"},{ "src":"./images/IMG-20241124-WA0010.jpg"},{ "src":"./images/IMG-20241124-WA0012.jpg"},{ "src":"./images/IMG-20241124-WA0013.jpg"},{ "src":"./images/IMG-20241124-WA0014.jpg"},{ "src":"./images/IMG-20241124-WA0015.jpg"}]
 let brands=[{"link":"fa-brands fa-github"},{"link":"fa-brands fa-youtube"},{"link":"fa-brands fa-facebook"},{"link":"fa-brands fa-instagram"}]

 return (
    <div className="App">
     <div id="page1">
      <Header ></Header>
      <Photo></Photo>
      <Buttons></Buttons>
   
     </div>
     <div id="navbar">
     {

   btnnames.map((data,index)=>{ return (<> <Navbar name={data.name} link={data.nav}></Navbar></>)})
     }
    </div>
<About></About>
<div id="progress" style={{marginTop:'10%',marginBottom:'10%'}}>

{
  pro.map((data,index)=>{ return <> <ProgressBar width={data.width} name={data.name}></ProgressBar>
</>})
}
</div>

<div className="emojis">
 
 {
  emojis.map((data,index)=>{ return <><Emojis name={data.name} image={data.image}></Emojis></>})
 }

</div>
<div id="pro">
<Myprojects></Myprojects>

 <div id="project">
{
  projects.map((data,index)=>{return <> <Projects src={data.src}></Projects></>})
}
</div>
</div> 
<Contact id="contact"></Contact>
<div id="Footer">
<div id="foot">
{
  brands.map((data,index)=>{ return <><Footers link={data.link}></Footers></>})
}
</div>
</div>
    </div>
  );
}

export default App;
