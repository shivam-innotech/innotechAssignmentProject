import React from 'react'
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Messages from './Pages/Messages'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/aboutUs'element={<AboutUs/>}/>
      <Route path='/contactUs'element={<ContactUs/>}/>
      <Route path='/messages'element={<Messages/>}/>

    </Routes>
   
    </>
  )
}

export default App