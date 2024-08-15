import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Piragenth</Navbar.Brand>

          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/departments">departments</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
