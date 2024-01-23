import React from 'react'
import './App.css'
import Sigup from './Component/Sigup'
import { Route, Routes } from 'react-router-dom'
Routes

function App() {

  return (
    <>

    {/* <Sigup/> */}
   <Routes>
    <Route path='/signup' element={<Sigup/>}/>
   </Routes>
    </>
  )
}

export default App
