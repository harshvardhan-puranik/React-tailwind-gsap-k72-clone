import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import Navfull from './components/Navigation/Navfull'


const App = () => {
  
  return (
    <div className='overflow-x-hidden'>
       <Navbar/>
       <Navfull/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agency />} />
        <Route path='/projects' element={<Projects />} />
      </Routes> 
    </div>
  )
}

export default App