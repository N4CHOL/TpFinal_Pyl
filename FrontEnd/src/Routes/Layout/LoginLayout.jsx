import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";


function LoginLayout() {
  return (
    <Container><Outlet /></Container>
  )
}

export default LoginLayout