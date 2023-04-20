import Row from 'react-bootstrap/Row';
import Banner from '../Banner/Banner';
import "./Content.css";
import Achievements from '../Achievements/Achievements';
import Success from '../Success/Success';

const Content = () =>{
    return (
        <div className="content-section">
			<Row>
				<Banner />
			</Row>
			<Achievements />
			<Success />
		</div>

    );
}
export default Content;