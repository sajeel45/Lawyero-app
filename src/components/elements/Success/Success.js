import CountUp from 'react-countup';
import Divider from "../../../assets/divider-white.svg";
import background from "../../../assets/librarybackground/library.jpg";
import { Container, Row,Col } from "react-bootstrap";
import "./Success.css";




const Success = (props) => {
  const successItems = props.successItems;
  return (
    <div className="content-wrapper dark-color-overlay-over-image" style={{backgroundImage:`url(${background})`}}>
      <Container>
        <Row>
        {successItems.map((item, index) => (
          <Col lg="4" sm="12" md="6" key={index} >
            <div>
              <div className="panel-item-wrapper panel-grid-cell">
                <div className="panel-icon-wrapper">{item.icon}</div>
                <div className="panel-counter-wrapper">
                  <CountUp end={item.count}  className="counter" duration={2.5} separator="," decimal="." suffix={item.suffix} prefix={item.prefix} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay="500"/>
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
