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
                    <Navbar expand='lg' variant='dark' className=''>
                        <Container fluid>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='op-menu'>
                            <Nav className=' nav-link nav'  as="ul">
                            <NavDropdown href="/home" title="Home" id='basic-nav-dropdown' menuVariant='dark' as="li" className=''>
                                <NavDropdown.Item href='#' className='nav-link' as="li">Home 1</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link' as="li">Home 2</NavDropdown.Item>
                            </NavDropdown>
                            <Nav as="li">
                                <Nav.Link href='#'>Who We Are</Nav.Link>
                            </Nav>
                            <NavDropdown title="Practice Areas" id='basic-nav-dropdown' menuVariant='dark' as="li">
                                <NavDropdown.Item href='#' className='nav-link' as="li">2 Column Layout</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link' as="li">3 Column Layout</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link' as="li">Individual Practice Area</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Team Members' id='basic-nav-dropdown' menuVariant='dark' as="li" >
                                <NavDropdown.Item href='#' className='nav-link' as="li">Robert Darren</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Pages' id='basic-nav-dropdown' menuVariant='dark' as="li">
                                <NavDropdown.Item href='#' className='nav-link' as="li">FAQs</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link' as="li">404 Page</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Blogs' id = 'basic-nav-dropwdown' menuVariant='dark' as="li">
                                <NavDropdown.Item href='#' className='nav-link' as="li">Blog With SideBar</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link' as="li">Blog FullPage</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link' as="li">Blog Chess</NavDropdown.Item>
                                <NavDropdown.Item href='#' className='nav-link' as="li">Blog Grid</NavDropdown.Item>
                            </NavDropdown>
                            <Nav as="li">
                            <Nav.Link href='#'>Contact</Nav.Link>
                            </Nav>
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