import React from "react"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'

function App() {
  return (
      <BrowserRouter>
        <layouts>
        <NavigationBar/>
          <Routes>
          <Route exact path='/' element={<Home/>} />
          </Routes>
        </layouts>
      </BrowserRouter>
  )
}

export default App