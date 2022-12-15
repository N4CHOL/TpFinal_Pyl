
import React from 'react'
import authservice from "../../Utilities/Services/auth.service"
import "./index.css"
function Index() {

  const user= authservice.getCurrentUser()
  return (
    <>
    <h1 className='titleindex'>Anotador</h1>
    <h1 className='titleindex'>Bienvenido {user.username}</h1>

    </>
  )
}

export default Index