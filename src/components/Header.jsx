import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="white" fixed="top" expand="lg" className="shadow-sm">
      <Container fluid className="px-4">
        <Navbar.Brand className="fw-bolder me-3 d-inline-block align-center">
          <img
            alt=""
            src="/logo.png"
            height="24"
          />{" "}
          gofood
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink to="/" className={({ isActive }) => ['fw-semibold mx-lg-4', isActive ? 'active' : null,].filter(Boolean).join(" ")}>Home</NavLink>
            <NavLink to="/recommendations" className={({ isActive }) => ['fw-semibold mx-lg-4', isActive ? 'active' : null,].filter(Boolean).join(" ")}>Recommendations</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;