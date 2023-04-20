import { FaHandshake } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import background from "../../assets/librarybackground/library.jpg";
import "./Success.css";
import { Row,Col } from "react-bootstrap";

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
    <>
          <Row>
      {items.map((item, index) => (
        
            <Col lg="4" sm="12" md="6">
              <div className="panel-wrapper" key={index} style={{backgroundImage:`url(${background})`}}>
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
    </>
    
  );
};
export default Success;
