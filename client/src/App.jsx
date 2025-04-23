import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/auth/users/UserLogin'
import UserSignUp from './pages/auth/users/UserSignUp'
import CaptainLogin from './pages/auth/captain/CaptainLogin'
import CaptainSignUp from './pages/auth/captain/CaptainSignUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
      </Routes>
    
    </BrowserRouter>
  
  )
}

export default App
