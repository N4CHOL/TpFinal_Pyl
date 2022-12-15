
import { useState,useEffect } from "react";
import authservice from "../../Utilities/Services/auth.service"
import { useNavigate } from "react-router-dom";
import "./index.css"
function Index() {

  const [currentUser , setCurentUser] = useState()
  const navigate = useNavigate()

  const user= authservice.getCurrentUser()

  useEffect(() => {
    try {
      const user = authservice.getCurrentUser();
      //console.log(user);

      if (user) {
        setCurentUser(user);
      } else {
        navigate("/app/auth/login");
      }
    } catch (err) {
      navigate("/app/auth/login");
    }
  }, [navigate]);
  return (
    <>
    <h1 className='titleindex'>Anotador</h1>
    <h1 className='titleindex'>Bienvenido {user.username}</h1>

    </>
  )
}

export default Index