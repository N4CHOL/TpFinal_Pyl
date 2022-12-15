import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import authService from "../../Utilities/Services/auth.service";

export default function Admin() {

  const [currentUser , setCurentUser] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    try {
      const user = authService.getCurrentUser();
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
      {/* all the other elements */}
      {

      currentUser && <>
       <Sidebar />
      <Container><Outlet /></Container>
      </>
      }
     



    </>
  );
}