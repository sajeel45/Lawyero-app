import { FaHandshake } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import Divider from "../../assets/divider-white.svg";
import background from "../../assets/librarybackground/library.jpg";
import "./Success.css";
import { Container, Row,Col } from "react-bootstrap";

const items = [
  {
    icon: <FaHandshake color="#fafafa" className="panel-icon-styling" size="70px" />,
    id: 1,
    count: "150+",
    caption: "Customers",
  },
  {
    icon: <FaDollarSign color="#fafafa" className="panel-icon-styling" size="70px" />,
    id: 2,
    count: "$20,000,000",
    caption: "Recovered",
  },
  {
    icon: <FaThumbsUp color="#fafafa" className="panel-icon-styling" size="70px" />,
    id: 3,
    count: "98%",
    caption: "Success Ratio",
  },
];

const Success = () => {
  return (
    <div className="countent-wrapper dark-color-overlay-over-image" style={{backgroundImage:`url(${background})`}}>
      <Container>
        <Row>
        {items.map((item, index) => (
          <Col lg="4" sm="12" md="6" key={index} >
            <div>
              <div className="panel-item-wrapper panel-grid-cell">
                <div className="panel-icon-wrapper">{item.icon}</div>
                <div className="panel-counter-wrapper">
                  <span className="counter">{item.count}</span>
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
