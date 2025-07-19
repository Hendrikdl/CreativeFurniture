import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';

function ColorSchemesExample() {
  return (
    
      
      
      <Navbar bg="primary" data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">TM Creative Furniture</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="/">Home</Nav.Link>
            <Nav.Link className="navLink" href="/gallery">Gallery</Nav.Link>
            <Nav.Link className="navLink" href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

  
  );
}

export default ColorSchemesExample;