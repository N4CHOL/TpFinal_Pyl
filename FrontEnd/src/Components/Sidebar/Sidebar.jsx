import React from 'react'

import {
  useNavigate
} from "react-router-dom";



import "../../assets/css/Sidebar/Sidebar.css"

function Sidebar() {
  const navigate = useNavigate()
  return (
    <>
      <nav className='nav'>

        <h1>Note Taker</h1>
        <button className='item' onClick={(e => navigate("/app/note"))}><p className='p'>Cargar Nota</p>

        </button>

      </nav>

    </>
  )
}

export default Sidebar

