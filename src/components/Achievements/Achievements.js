import { Container, Row, Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Achievements.css";

const achievements = [
  {
    id: 1,
    logo: <FaUser color="#63CAB5" className="icon-styling" size="60px" />,
    alt: "logo",
    title: "20+ Years of Experience",
    description:
      "We are in the law industry for more than 20 years with more than 98% of client satisfaction",
  },
  {
    id: 2,
    logo: <FaBriefcase color="#63CAB5" className="icon-styling" size="60px" />,
    alt: "logo",
    title: "Qualified And Experienced Attorneys",
    description:
      "Our team is the best in the business. We are team of attorneys which are passionate about their jobs.",
  },
  {
    id: 3,
    logo: <FaTrophy color="#63CAB5" className="icon-styling" size="60px" />,
    alt: "logo",
    title: "Awards And Achievements",
    description:
      "We at lawyero earned the best law firm award in 2017 with a success ratio of 99%.",
  },
];

const Achievements = () => {
  return (
    <>
      <Container className="overlap-medium panel-grid">
        <Row>
          {achievements.map((item, index) => {
            let animation = "";
            if (index === 0 || index === 2) {
              animation = "animate__fadeInUp";
            } else if (index === 1) {
              animation = "animate__fadeInDown";
            }
            return (
                <Col
                  lg="4"
                  sm="12"
                  md="6"
                  className="achievement-wrapper"
                  key={index}
                >
                  <AnimationOnScroll key={item.id} animateIn={animation} duration={0.2} animateOnce='true'>
                  <div className="op-why-choose-section-style-2">
                    <div className="op-why-choose">
                      <div className="icon-wrapper">
                        <span>{item.logo}</span>
                      </div>
                      <div className="title-wrapper">
                        <h4>{item.title}</h4>
                      </div>
                      <div className="description-wrapper">
                        <p>{item.description}</p>
                      </div>
                    </div>
              
                  </div>
                  </AnimationOnScroll>
                </Col>
                
              
            );
            
            
          })}
          
        </Row>
        
        
      </Container>
    </>
  );
};

export default Achievements;
