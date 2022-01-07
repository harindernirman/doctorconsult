import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes ,Route } from 'react-router-dom';
import Register from './components/Register';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
