import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Piragenth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/departments">departments</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
