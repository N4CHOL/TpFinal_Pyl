import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { PostUser } from '../../Utilities/Services/ApiCall'
import { SuccessToast } from '../../Utilities/Toast'

import "./register.css"
function FormRegister() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  
  const [password, setPassword] = useState("")

  const enviar = async () => {
    if (password != "" && username != "" && email != "") {
      await PostUser({ name: name, surname: surname, email: email, username:username, password:password })
        .then(r => {
          SuccessToast("Cuenta Creada Correctamente")
          setTimeout(function () {
            navigate("/app/note");
          }, 1300);
        })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    }
  }

  return (
    <><div className='formreg'>
       <span className='regspan'>Email</span>
        <input className='regput'value={email} onChange={(e) => setEmail(e.target.value)}/>
        <span className='regspan'>Nombre de Usuario</span>
        <input className='regput'value={username} onChange={(e) => setUsername(e.target.value)}/>
        <span className='regspan'>Contraseña</span>
        <input placeholder="contraseña" type="password" className='regput'value={password} onChange={(e) => setPassword(e.target.value)}/>
        <span className='regspan' >Nombre</span>
        <input placeholder='Nombre (opcional)' className='regput' value={name} onChange={(e) => setName(e.target.value)}/>
        <span className='regspan' >Apellido</span>
        <input placeholder='Apellido (opcional)' className='regput'value={surname} onChange={(e) => setSurname(e.target.value)}/>
       
        
        
        

        <button className='buttonreg' onClick={(e)=>(enviar())}>Enviar</button>

    </div>
    </>
    
  )
}

export default FormRegister