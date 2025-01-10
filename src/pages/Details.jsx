import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Details() {
    const params = useParams()
    console.log(params);
    const location = useLocation()
    console.log(location);
    
    
  return (
    <div>
<h1>Salom</h1>
    </div>
  )
}

export default Details