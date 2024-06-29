import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authentication from './screens/Authentication'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Home from './screens/Home'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Authentication/>}/>
      <Route path = '/signup' element ={<Signup/>}/>
      <Route path = '/login' element ={<Login/>}/>

      <Route path = '/home' element= {<Home/>}/>
    </Routes>
    
    </>
  )
}

export default App
