import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Educations from "./components/Educations";



const App = ()=>{
  return(
    <>
      <Navbar/>
      <About/>
      <Educations/>
    </>
  )
}

export default App;
