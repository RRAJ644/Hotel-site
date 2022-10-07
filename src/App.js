import React from 'react'
import Home from './pages/Home/Home'
import Hotel from './pages/Hotel/Hotel'
import List from './pages/List/List'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotel/:id' element={<Hotel/>}/>

       </Routes>
    </BrowserRouter>
  )
}

export default App