import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Home from '../src/Pages/Homes'

function App() {
 return (
   <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="./Pages/Register.jsx" element={<Register />}  />
      <Route path="/Client/src/Pages/Login.jsx" element={<Login />}  />
   </Routes>
   </>
  )
}

export default App
