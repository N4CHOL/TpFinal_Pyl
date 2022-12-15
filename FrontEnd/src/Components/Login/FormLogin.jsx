import { useState, useEffect } from "react"
import { Alert, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import * as noteServer from "../../Utilities/Services/ApiCall"



import "./login.css"
function FormLogin() {

    

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState("")
  
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    var response
   
    const GetNotes = async () => {
        try {
            response = await noteServer.GetUserList();
            setUsers(response.data)
        } catch (error) {
      
        }
      }
    
    useEffect(() => {
        GetNotes()
      }, []);
      
      const handleLogin = async (e) => {
        users.forEach(element => {if(element.username == username && element.password == password ){
      
                     const user = {
                         "username" : element.username,
                         "id":element.id,
                         "email": element.email
                     }
                     localStorage.setItem("user", JSON.stringify(user));
                     navigate("/app/index");
                 }else{
                   return (
                     setError(true)
                   )
                 }   
        })}
        
        


        
        
        
        
      
    
    return (
        <>
            <h1 className='logintitle'>Proyecto Final Integrador </h1>
            <h1 className='loginsub'>Anotador! </h1>



            <div className='formlog'>
                <span className='loginspan'>Nombre de Usuario</span>
               
                <input className='logininput' value={username} onChange={(e) => setUsername(e.target.value)} />
            
                <span className='loginspan' >Contraseña</span>
                <input type="password"  className='logininput' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className='buttonlog' onClick={(e) => handleLogin(e)}>Ingresar</button>
                {error == true && <><Alert variant="danger"  onClose={() => setError(false)}  dismissible>Usuario o contraseña equivocados</Alert></>}
                <a className='alog' href='/app/auth/register'>crear cuenta</a>
            </div>


        </>

    )
}

export default FormLogin