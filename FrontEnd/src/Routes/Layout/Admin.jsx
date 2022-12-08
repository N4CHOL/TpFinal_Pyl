import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function Admin() {
  return (
    <>
      {/* all the other elements */}

      <Sidebar />
      <Container><Outlet /></Container>



    </>
  );
}