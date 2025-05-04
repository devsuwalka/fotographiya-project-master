import React from 'react'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import HaldiPage from './Pages/HaldiPage'
import Footer from './layouts/Footer'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
const App = () => {
  return (
    <div>
      <Routers>
        {/* <Header /> */}
        <Routes>
        <Route path='/' element={<LoginPage />}></Route>
          <Route path='/homepage' element={<HomePage />}></Route>
        </Routes>
        {/* <Footer />  */}
      </Routers>
    </div>
  )
}

export default App
