import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CiSearch,CiHeart,CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";


function NavBar(){
  // const navColor = {backgroundColor: 'white'}
    return(
      <Container>
      <Navbar bg="white" data-bs-theme="white">
        <Navbar.Brand href="#home">HyundaiCertified</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">내차사기</Nav.Link>
            <Nav.Link href="#link">내차팔기</Nav.Link>
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
        </Navbar.Collapse>
        <CiSearch />
        <CiHeart />
        <CiShoppingCart />
        <IoPersonOutline />

    </Navbar>
      </Container>
  );
}

export default NavBar;