import { Container, Row, Col } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./About.css";


const About = (props) => {
  const aboutItems = props.aboutItems;
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
