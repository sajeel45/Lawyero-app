import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Banner from '../Banner/Banner';
import "./Content.css";
import Achievements from '../Achievements/Achievements';
import Success from '../Success/Success';

const Content = () =>{
    return (
        <Container fluid className="content-section">
			<Row>
				<Banner />
			</Row>
			<Achievements />
			<Success />
		</Container>

    );
}
export default Content;