import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes ,Route } from 'react-router-dom';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes> 
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/edit/:id" element={<Edit/>} />
      <Route exact path="/view/:id" element={<Details/>} />
      </Routes>
    </>
  )
}

export default App
