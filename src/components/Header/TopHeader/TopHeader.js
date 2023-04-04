import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./TopHeader.css";

const TopHeader = () => {
    return (
        <div className="op-header-top hidden-xs">
            <Container>
                <Row>
                    <Col xs={12} sm={6} className='op-call-us text-start'>
                        Call Us: <a className="tel" href="tel:1911462242">1911-462-242</a>
                    </Col>
                    <Col xs={12} sm={6} className='op-request text-end bold'>
                        {/* <Link to={""}>Request a free consultation</Link> */}
                        <a href="/contact" className="request-free-consultation">Request a free consultation</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default TopHeader;