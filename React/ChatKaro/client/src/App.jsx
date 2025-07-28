import React from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Toaster/>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App