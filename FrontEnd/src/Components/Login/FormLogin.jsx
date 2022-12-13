import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import * as noteServer from "../../Utilities/Services/ApiCall"



import "./login.css"
function FormLogin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState("")
    const navigate = useNavigate();
    var response
   
    const GetNotes = async () => {
        try {
            response = await noteServer.GetUserList();
            setUsers(response.data)
        } catch (error) {
      
        }
      }
      console.log(users)
    useEffect(() => {
        GetNotes()
      }, []);

      const handleLogin = async (e) => {
        var i =0
        for (i=0;i<=users.length-1;i++) { 
            if (users[i].username == username && users[i].password == password ){
                const user = {
                    "username" : users[i].username,
                    "id":users[i].id,
                    "email": users[i].email
                }
                   
                
                
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/app/index");
            }else{
              
            }
              
          
            
     }
        // try {
        //     await authService.login(username, password).then(
        //         () => {
        //             navigate("/app/index");
        //             window.location.reload();
        //             window.location.reload();
        //         },
        //         (error) => {
        //             console.log(error.code);
        //             if (error.code === "ERR_BAD_REQUEST") {
        //                 setWarning(true)
        //             }
        //         }
        //     );


        // } catch (err) {
        //     // console.log(err);
        // }

    };
 
    return (
        <>
            <h1 className='logintitle'>Proyecto Final Integrador </h1>
            <h1 className='loginsub'>Anotador! </h1>



            <div className='formlog'>
                <span className='loginspan'>Nombre de Usuario</span>
                <input className='logininput' value={username} onChange={(e) => setUsername(e.target.value)} />
                <span className='loginspan'>Contraseña</span>
                <input className='logininput' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className='buttonlog' onClick={(e) => handleLogin(e)}>Ingresar</button>

                <a className='alog' href='/app/auth/register'>crear cuenta</a>
            </div>


        </>

    )
}

export default FormLogin