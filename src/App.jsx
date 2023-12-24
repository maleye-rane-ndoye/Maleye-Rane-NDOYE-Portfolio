import {Routes,Route} from "react-router-dom"
import PortFolio from "./pages/PortFolio"
import Home from "./pages/Home"
import Cv from "./pages/Cv"
import Skills from "./pages/Skills"
import Project from "./pages/Project"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import AboutMe from "./pages/AboutMe"

import FolioAll from "./DumbComponents/FolioAll"
import FolioApp from "./DumbComponents/FolioApp"
import FolioWeb from "./DumbComponents/FolioWeb"
import FolioDesign from "./DumbComponents/FolioDesign"
import './App.css'


function App(){

  return (
    <> 
       <Routes><Route path="/" element={<Home/>} /> </Routes>
       <Routes><Route path="/home" element={<Home/>} /> </Routes>


       <Routes>
                <Route path="/portFolio" element={<FolioAll/>}/>
                      <Route path="/portFolio/all" element={<FolioAll/>} />
                      <Route path="/portFolio/web" element={<FolioWeb/>} />
                      <Route path="/portFolio/app" element={<FolioApp/>} />
                      <Route path="/portFolio/design" element={<FolioDesign/>} />
                <Route/>
       </Routes>
      
       


       <Routes><Route  path="/aboutMe" element={<AboutMe/>}/></Routes>

       <Routes><Route  path="/cv" element={<Cv/>}/></Routes>

       <Routes><Route  path="/skills" element={<Skills/>}/></Routes>

       <Routes><Route  path="/project" element={<Project/>}/></Routes>

       <Routes><Route  path="/blog" element={<Blog/>}/></Routes>

       <Routes><Route  path="/contact" element={<Contact/>}/></Routes>
       <Routes><Route  path="/contact" element={<Contact/>}/></Routes>

    </>
  )

  
}


export default App
