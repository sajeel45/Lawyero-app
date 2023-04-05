import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../../../assets/logo/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import "./BottomHeader.css";

const BottomHeader = () => {
    return(
        <div className='op-header'>
        <Container>
            <Row>
                <Col md="3" sm="6" className='op-logo-container'>
                    <a href="http://bsmthemes.com/demo/lawyero" className="op-logo">
                       <img src={Logo} alt="Logo" />
                    </a>
                </Col>
                <Col md = "9" sm = "6" className='op-gns'>
                    <Navbar expand='lg' variant='dark'>
                        <Container fluid>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className=' nav-link'>
                            <NavDropdown href="/home" title="Home" id='basic-nav-dropdown' menuVariant='dark' className='nav-spacing'>
                                <NavDropdown.Item href='#' className='nav-link'>Home 1</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link'>Home 2</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='#' className='nav-spacing'>Who We Are</Nav.Link>
                            <NavDropdown title="Practice Areas" id='basic-nav-dropdown' menuVariant='dark' className='nav-spacing'>
                                <NavDropdown.Item href='#' className='nav-link'>2 Column Layout</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link'>3 Column Layout</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link'>Individual Practice Area</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Team Members' id='basic-nav-dropdown' menuVariant='dark' className='nav-spacing'>
                                <NavDropdown.Item href='#' className='nav-link'>Robert Darren</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Pages' id='basic-nav-dropdown' menuVariant='dark' className='nav-spacing'>
                                <NavDropdown.Item href='#' className='nav-link'>FAQs</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link'>404 Page</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Blogs' id = 'basic-nav-dropwdown' menuVariant='dark' className='nav-spacing'>
                                <NavDropdown.Item href='#' className='nav-link'>Blog With SideBar</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link'>Blog FullPage</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link'>Blog Chess</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link'>Blog Grid</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='#' className='nav-spacing'>Contact</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>

                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
        </div>
    );
}
export default BottomHeader;