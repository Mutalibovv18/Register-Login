import React, { useEffect, useState } from 'react'
import "./App.css"
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'
import Details from './pages/Details'

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const navigate = useNavigate()

  useEffect(() => {
if(localStorage.getItem('token')) {
  setToken(localStorage.getItem('token'))
} else {
  navigate('/login')

}
  }, [])

  function privateRoute(isAuth, children) {
    if (!isAuth) {
navigate('/login')
    }
    return children
  }
  return (
    <div>
 <Routes>

 <Route path='/login' element = {<Login></Login>}></Route>
 <Route path='/register' element = {<Register></Register>}></Route>
 <Route path='*' element = {<Error></Error>} ></Route>

  <Route path='/home' element = {<privateRoute isAuth= {!!token}>
    <Home></Home>
  </privateRoute>}></Route>
  <Route path='/about' element = {<privateRoute isAuth= {!!token}>
    <About></About>
  </privateRoute>}></Route>
  <Route path='/details/:id' element ={<privateRoute isAuth= {!!token}>
    <Details></Details>
  </privateRoute>}></Route>

 </Routes>
    </div>
  )
}

export default App