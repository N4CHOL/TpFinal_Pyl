import React from 'react'
import "./login.css"
function FormLogin() {
    return (
    <>
    <h1 className='logintitle'>Proyecto Final Integrador </h1>
    <h1 className='loginsub'>Anotador! </h1>
   

       
        <div className='formlog'>
            <span className='loginspan'>Nombre de Usuario</span>
            <input className='logininput'/>
            <span className='loginspan'>Contraseña</span>
            <input className='logininput'/>

            <button className='buttonlog'>Ingresar</button>

            <a className='alog' href='/app/auth/register'>crear cuenta</a>
        </div>


    </>

    )
}

export default FormLogin