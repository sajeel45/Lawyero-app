import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Content.css";

const Content = () =>{
    return (
        <Container fluid className="content-section">
			<Row>
				<section className='op-slogan-section op-title-wrapper dark-color-overlay-over-image'></section>
			</Row>
		</Container>
    );
}
export default Content;