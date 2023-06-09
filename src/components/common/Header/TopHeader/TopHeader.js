import {Container,Row,Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./TopHeader.css";

const TopHeader = () => {
    return (
        <div className="op-header-top hidden-xs">
            <Container>
                <Row>
                    <Col xs={12} sm={6} className='op-call-us text-start'>
                        Call Us: <a className="tel" href="tel:1911-462-242">1911-462-242</a>
                    </Col>
                    <Col xs={12} sm={6} className='op-request text-end bold'>
                        {/* <Link to="/contact">Request a free consultation</Link> */}
                        <Link to="/contact" className="request-free-consultation">Request a free consultation</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default TopHeader;