import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import gsap from 'gsap';




function MyNavbar() {


  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#dc3545" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#ffc720" });
  };

  const onTouch = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#dc3545" });
  };

  const onGone = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#dc3545" });
  };



  return (

    

    <>

      <Navbar bg="danger" fixed='top' variant="dark" color='white'>

        <Container >
          <Navbar.Brand href="#logo"> <h4>Lumina <br></br>Software</h4></Navbar.Brand>
          <Nav className="ml-auto" >
            <Nav.Link as={Link} to={"/accueil"} ><button onMouseEnter={onTouch} onMouseLeave={onGone} type="button" className="btn btn-danger"><strong>Accueil</strong></button></Nav.Link>
            <Nav.Link as={Link} to={"/logiciels"}><button onMouseEnter={onTouch} onMouseLeave={onGone} type="button" className="btn btn-danger"><strong>Logiciels</strong></button></Nav.Link>
            <Nav.Link as={Link} to={"/partenaires"}><button onMouseEnter={onTouch} onMouseLeave={onGone} type="button" className="btn btn-danger"><strong>Partenaires</strong></button></Nav.Link>
            <Nav.Link as={Link} to={"/contacts"}><button onMouseEnter={onTouch} onMouseLeave={onGone} type="button" className="btn btn-danger"><strong>Contacts</strong></button></Nav.Link>
            <Nav.Link as={Link} to={"/apprentissage"}><Button onMouseEnter={onEnter} onMouseLeave={onLeave} className='docs' variant="warning"><strong className='docs'>Documentation</strong></Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  

  )
}

export default MyNavbar;