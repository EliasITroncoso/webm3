import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './views/About/About'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import MyAppointments from './views/MyAppointments/MyAppointments'
import NewAppointment from './views/NewAppointment/NewAppointment'
import Register from './views/Register/Register'
import { Routes, Route, useLocation } from "react-router-dom"

function App() {

  const location = useLocation();

  return (
    <>
    {location.pathname !== "/login" && location.pathname !== "/register" && <Navbar />}

      <Routes>
        <Route path='/login' element= {<Login />} />
        <Route path='/home'  element= {<Home />} />
        <Route path='/'  element= {<Home />} />
        <Route path='/appointments' element= {<MyAppointments />} />
        <Route path='/register' element= {<Register />} />
        <Route path='/about' element= {<About />} />
        <Route path='/nAppoint' element= {<NewAppointment />} />
      </Routes>
    </>
  )
}

export default App
