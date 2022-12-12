import React from 'react'
import "./register.css"
function FormRegister() {
  return (
    <><div className='formreg'>
        <span className='regspan'>Nombre</span>
        <input className='regput'/>
        <span className='regspan'>Apellido</span>
        <input className='regput'/>
        <span className='regspan'>Email</span>
        <input className='regput'/>
        <span className='regspan'>Nombre de Usuario</span>
        <input className='regput'/>
        <span className='regspan'>Contraseña</span>
        <input className='regput'/>
        

        <button className='buttonreg'>Enviar</button>

    </div>
    </>
    
  )
}

export default FormRegister