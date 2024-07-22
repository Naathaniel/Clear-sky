import {  Navbar,  Nav, Container, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom';



export default function MyNavbar(){
    return(
        <>

      <Navbar expand="lg">
      <Container>
      <Navbar.Brand href="/">
        <img className='logogo' src='images/logo4.png'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="navvv" id="basic-navbar-nav">
          <Nav>
            <Nav.Link className='navtext' href="/">Home</Nav.Link >
            <Nav.Link className='navtext' href="#link">About</Nav.Link>
            <Nav.Link className='navtext' href="#Services">Services</Nav.Link>
            <Nav.Link className='navtext' as={Link} to="/CaseStudy">Case Studies</Nav.Link>
            <Nav.Link className='navtext' href="#Prices">Beta Program</Nav.Link>
            <Nav.Link className='navtext' href="#Contact">Contact Us</Nav.Link>
            {/* <button className='' href='https://calendly.com/r-dredhartclearskymarketing/overview-of-construction-beta-program'>Talk to Us</button> */}
            <a className='talktous' href="https://calendly.com/r-dredhartclearskymarketing/overview-of-construction-beta-program" target="_blank" rel="noopener noreferrer">
            Talk to Us
          </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </>
    )
}  