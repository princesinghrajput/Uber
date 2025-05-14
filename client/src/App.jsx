import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CaptainLogin from './pages/auth/captain/CaptainLogin'
import UserSignup from './pages/auth/users/UserSignUp'
import { ToastContainer } from 'react-toastify'
import UserLogin from './pages/auth/users/UserLogin'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>  
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/user-signup' element={<UserSignup/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/home' element={<Home/>}/>
        
        <Route path=''/>

      </Routes>
    
    </BrowserRouter>
  
  )
}

export default App
