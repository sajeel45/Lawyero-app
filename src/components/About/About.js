import member from "../../assets/about/member.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./About.css";

const aboutItems = [
  {
    id: 1,
    title: "About Firm",
    description1:
      "The attorneys of Lawyero have proven their ability to obtain excellent results on behalf of clients across industries in a wide range of disputes, from complex, international tech-based litigation to shareholder/partnership disputes and high-profile art transactions.",
    description2:
      "Contact our office today to schedule a confidential consultation with one of your attorneys to discuss the particular legal challenges you or your business is facing.",
    image: member,
    icon: <FaArrowRight />,
  },
];
const About = () => {
  return (
    <>
      {" "}
      <Container>
        <Row>
          <div className="about-section-wrapper">
            <Col md="" lg="0" sm="12">
              {aboutItems.map((item, index) => (
                <div
                  className="about-section-content-wrapper panel-grid-cell"
                  key={index}
                >
                  <div className="about-section-description-wrapper">
                    <AnimationOnScroll
                      animateIn="animate__fadeInUp"
                      animateOnce="true"
                    >
                      <h2>{item.title}</h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                      animateIn="animate__fadeInUp"
                      animateOnce="true"
                    >
                      <p>{item.description1}</p>
                      <p>{item.description2}</p>

                      <a href="/" className="button-style">
                        Learn More <span>{item.icon}</span>
                      </a>
                    </AnimationOnScroll>
                  </div>
                  <div className="about-section-image-wrapper">
                    <img src={item.image} alt="member" />
                  </div>
                </div>
              ))}
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default About;
