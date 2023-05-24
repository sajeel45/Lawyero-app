import { FaHandshake,FaDollarSign,FaThumbsUp } from "react-icons/fa";
import CountUp from 'react-countup';
import Divider from "../../assets/divider-white.svg";
import background from "../../assets/librarybackground/library.jpg";
import { Container, Row,Col } from "react-bootstrap";
import "./Success.css";


const items = [
  {
    icon: <FaHandshake color="#fafafa" className="panel-icon-styling" size="70px" />,
    id: 1,
    count: 150,
    prefix:'',
    suffix:'+',
    caption: "Customers",
  },
  {
    icon: <FaDollarSign color="#fafafa" className="panel-icon-styling" size="70px" />,
    id: 2,
    count: 20000000,
    prefix:'$',
    suffix:'',
    caption: "Recovered",
  },
  {
    icon: <FaThumbsUp color="#fafafa" className="panel-icon-styling" size="70px" />,
    id: 3,
    count: 98,
    prefix:'',
    suffix:'%',
    caption: "Success Ratio",
  },
];

const Success = () => {
  return (
    <div className="content-wrapper dark-color-overlay-over-image" style={{backgroundImage:`url(${background})`}}>
      <Container>
        <Row>
        {items.map((item, index) => (
          <Col lg="4" sm="12" md="6" key={index} >
            <div>
              <div className="panel-item-wrapper panel-grid-cell">
                <div className="panel-icon-wrapper">{item.icon}</div>
                <div className="panel-counter-wrapper">
                  {/* <span className="counter" >{}</span> */}
                  <CountUp end={item.count} className="counter" duration={2.5} separator="," decimal="." suffix={item.suffix} prefix={item.prefix} enableScrollSpy={true} scrollSpyDelay="500"/>
                  {/* <span className="counter-symbol">{item.symbol}</span> */}
                  <p className="panel-item-caption">{item.caption}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
        </Row>
      </Container>
      <div className="dividerContainer" style={{backgroundImage:`url(${Divider})`}}>
      </div>
      </div>
  );
};
export default Success;
