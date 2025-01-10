import React, { useState } from 'react'
import axios from 'axios'
import "../assets/styles/Register.css"
import { useNavigate } from 'react-router-dom'


function Register() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


    function validate () {
       
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
password: password
        }
        setLoading(true)
        axios.post("https://auth-rg69.onrender.com/api/auth/signin", user, {
            headers: {
              "Content-Type" : "application/json"
            }
        } ) 
        .then((response) => {
            if(response.status == 200) {
                localStorage.setItem("user", JSON.stringify(response.data))
                localStorage.setItem("token", response.data.accessToken);
                navigate("/home")
            }
          
           
        })
        .catch((error) => {
            if(error.status == 404 || error.status == 401) {
                alert(error.response?.data?.message)
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
    <input value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter-password' type="password" />
    <button disabled = {loading} className='btn-reg'>{loading ? "Loading..." : "Register"}</button>
    </form>
    </div>

  )
}

export default Register