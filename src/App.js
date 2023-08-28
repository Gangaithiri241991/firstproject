
import './App.css';
import img from "./i.png"
import img1 from "./d.png"
import img2 from "./fa.avif"
import img3 from "./download (3).png"
import img4 from "./download (2).png"
import img5 from  "./youtupe.avif"
import Navbar from "./component/navbar"
import Carosel from './component/carosel.js';
import Card from "./component/card"
import Home from  "./component/home"
import About from "./component/about"
import {Route,Routes,Link } from "react-router-dom"
import News from './component/news'
import News1 from './component/news1'
import News2 from './component/news2'
import News3 from './component/news3'
import Industry from './component/industry'
import Technology from './component/technology';

import Clients from './component/clients.js'
function App() {
  return (
    <div className="App">
      
       
     <header >
      <nav  >
    <div className="container6">

<img src={img2} height="2%" width="2%"/>
<img src={img3} height="2%" width="2%"/>
<img src={img1} height="2%" width="2%"/>
<img src={img4} height="2%" width="2%"/>
<img src={img} height="3%" width="3%"/>
<img src={img5} height="2%" width="2%"/>
        
      
        
       
      
       
        
        
        
<div>
  <ul>
        <li>123425</li>
        <li> gghjjk </li>
        <li>123425</li> 
        <li>123425</li> </ul> </div>            
    </div>
      </nav>
      <hr/>
      
      
      
      <Routes>
      
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/news" element = {<News/>}
        />

         <Route path="/news1" element = {<News1/>}/>
                    
         <Route path="/news2" element = {<News2/>}/> 
          <Route path="/news3" element = {<News3/>}/>
         

        </Routes>
        <Navbar/>
      </header><br/><br/>
    
      <section className="container">
      <Carosel/>
      </section>
     <section className='car2'>

      <h5 className="section2">BUILDING THE GAP BETWEEN BUSINESS AND TECHNOLOGY</h5>
     <p className='sect2'>OUR SERVICES</p>
     
     <Card/><br/><br/>
    
     
     
     </section><br/>
     <h6>Industries</h6>
     <section>
     
      <Industry/>





     </section>
     <h5>TECHNOLOGY</h5>
     
<Technology/>





<section>

  <Clients/>
  </section>

      


      
   </div>
  
   
  );
}

export default App;
