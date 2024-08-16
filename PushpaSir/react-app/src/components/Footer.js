import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";
import virat from "./images/time-to-balance-hungry-of-runs-virat-kohli.gif";
export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-primary text-white p-4">
          <Col className="mx-5">
            <Stack>
              <Image src={virat} alt="Logo" rounded width={"150vw"} />
              <h3>Piragenth</h3>
              <p>VIRAT Kohli</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              Useful Links
              <NavLink href="/" className="text-white">
                Home
              </NavLink>
              <NavLink href="/departments" className="text-white">
                Departments
              </NavLink>
              <NavLink href="/about" className="text-white">
                About
              </NavLink>
              <NavLink href="/contact" className="text-white">
                Contact
              </NavLink>
              <NavLink href="/calculator" className="text-white">
                Calculator
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <h4>Contact US !</h4>
            <p>piragenthtech@gmail.com</p>
            <p>Phone: +94 757049466</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
