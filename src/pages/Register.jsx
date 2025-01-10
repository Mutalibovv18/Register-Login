import React, { useState } from 'react'
import axios from 'axios'
import "../assets/styles/Register.css"
import { useNavigate } from 'react-router-dom'


function Register() {
    const [userName, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [loading, setLoading] = useState(false)

    function validate () {
          if(password !== confirm) {
            alert("Parollar mos kelmadi")
            return false
          }

        return true
    }

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();

        const isValid = validate()
        if (!isValid) {
            return
        }

        const user = {
username: userName,
email : email,
password: password
        }
        setLoading(true)
        axios.post("https://auth-rg69.onrender.com/api/auth/signup", user, {
            headers: {
              "Content-Type" : "application/json"
            }
        } ) 
        .then((response) => {
            if (response.status == 200) {
                navigate('/login')

            }
           
        })
        .catch((error) => {
            if(error.response.status == 400 ) {
            alert("Username is already in use")
            }
        })
        .finally(function() {
            setLoading(false)

        })   

    }
  return (
    <div>
    <form onSubmit={handleSubmit} className='form'>
    <input value={userName} onChange={(e) => {setUsername(e.target.value)}} placeholder='Enter Username' type="text" />
    <input value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter-email' type="email" />
    <input value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter-password' type="password" />
    <input value={confirm} onChange={(e) => {setConfirm(e.target.value)}} placeholder='Confirm-Password' type="password" />
    <button disabled = {loading} className='btn-reg'>{loading ? "Loading..." : "Register"}</button>
    </form>
    </div>

  )
}

export default Register