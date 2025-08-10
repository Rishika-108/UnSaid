import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Letter from './Pages/Letter/Letter'
import About from './Pages/About/About'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/letter' element={<Letter/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes> 
   </>
  )
}

export default App