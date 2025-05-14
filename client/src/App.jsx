import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CaptainLogin from './pages/auth/captain/CaptainLogin'
import UserSignup from './pages/auth/users/UserSignUp'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>  
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/user-signup' element={<UserSignup/>}/>
    
        
        <Route path=''/>

      </Routes>
    
    </BrowserRouter>
  
  )
}

export default App
