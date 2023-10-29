import React from 'react'
import Home from './Home'
import SingleMovie from './SingleMovie'
import {Route, Routes } from 'react-router-dom'

const App = () => {
  return (
<>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<>Page Not Found</>}/>
    </Routes>
  
    </>
  )
}

export default App
