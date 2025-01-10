import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate()
    function handleNavigate() {

        const user = {
            name: "Mutalibov"
        }
        navigate("/details/45", {state : user})
    }
  return (
    <div>
        <button onClick={handleNavigate}>Go to the details</button>
    </div>
  )
}

export default Home