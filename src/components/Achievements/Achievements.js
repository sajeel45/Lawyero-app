import { Container, Row, Col } from "react-bootstrap";
import logo from './logo192.png'
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import "./Achievements.css";

const achievements = [
  {
    id: 1,
    logo:FaUser,
    title: "20+ Years of Experience",
    description:
      "We are in the law industry for more than 20 years with more than 98% of client satisfaction",
  },
  {
    id: 2,
    logo:FaBriefcase,
    title: "Qualified And Experienced Attorneys",
    description:
      "Our team is the best in the business. We are team of attorneys which are passionate about their jobs.",
  },
  {
    id: 3,
    logo:FaTrophy,
    title: "Awards And Achievements",
    description:
      "We at lawyero earned the best law firm award in 2017 with a success ratio of 99%.",
  }
];

const Achievements = () => {
  return (
    <>
      <Container className="overlap-medium panel-grid">
        <Row>
            {achievements.map((item, index) => (
              <Col lg='4' sm='12' md='6' className="achievement-wrapper" key={index}>
                <div className="op-why-choose-section-style-2">
                <div className="op-why-choose">

                <div className="icon-wrapper">
                  <img src={item.logo} alt="logo"/>
                </div>
                <div className="title-wrapper">
                  <h4>{item.title}</h4>
                </div>
                <div className="description-wrapper">
                  <p>{item.description}</p>
                </div>
              </div>
              </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
export default Achievements;
