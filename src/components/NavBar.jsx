import { useState } from 'react';
import {Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
// import { CiSearch,CiHeart,CiShoppingCart } from "react-icons/ci";
// import { IoPersonOutline } from "react-icons/io5";


function NavBar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    return(
      <Container>
      <Navbar expand="lg" bg="white" data-bs-theme="white">
        <Navbar.Brand href="#home" className='logo'>HyundaiCertified</Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">내차사기</Nav.Link>
            <Nav.Link href="#link">내차팔기</Nav.Link>
            <Nav.Link href="#link">야호</Nav.Link>
            <NavDropdown title="Hi-LAB" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">트렌드통계</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                시세
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">통합이력조회</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                거래꿀팁
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">내차사기</Nav.Link>
          </Nav>
          {/* <div className='d-flex gap-3 me-auto'>
        <a href='#' className='icons text-dark'><CiSearch /></a>
        <a href='#' className='icons text-dark'><CiHeart /></a>
        <a href='#' className='icons text-dark'><CiShoppingCart /></a>
        <a href='#' className='icons text-dark'><IoPersonOutline /></a>
        </div> */}

          <Offcanvas show={show} onHide={handleClose} className='ms-auto'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar.Collapse>

    
        

        
    </Navbar>
      </Container>
  );
}



export default NavBar;