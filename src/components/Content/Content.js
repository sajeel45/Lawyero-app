import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Banner from '../Banner/Banner';
import "./Content.css";

const Content = () =>{
    return (
        <Container fluid className="content-section">
			<Row>
				<Banner />
				</Row>
		</Container>
    );
}
export default Content;