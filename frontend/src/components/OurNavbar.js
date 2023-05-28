import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route, useNavigate } from "react-router-dom";

function OurNavbar() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate("/");
  };

  const navigateToCreate = () => {
    // 👇️ navigate to /contacts
    navigate("/create");
  };
  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate("/login");
  };

  const navigateToSignup = () => {
    // 👇️ navigate to /contacts
    navigate("/signup");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={navigateToHome}>ASquad</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={navigateToHome}>Overview</Nav.Link>
            <Nav.Link onClick={navigateToCreate}>Create Cycle</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link onClick={navigateToSignup}>Signup</Nav.Link>
            <Nav.Link>Logout</Nav.Link>
            <Nav.Link onClick={navigateToLogin}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OurNavbar;
