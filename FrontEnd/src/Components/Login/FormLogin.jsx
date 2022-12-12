import React from 'react'
import "./login.css"
function FormLogin() {
    return (
    <>
    <h1 className='logintitle'>Proyecto Final Integrador </h1>
    <h1 className='loginsub'>Anotador! </h1>
        <div className='formloguin'>

       
        <div className='form'>
            <span className='loginspan'>Nombre de Usuario</span>
            <input/>
            <span className='loginspan'>Contraseña</span>
            <input/>

            <a className='a' href='/app/auth/register'>crear cuenta</a>
        </div>
        </div>

    </>

    )
}

export default FormLogin