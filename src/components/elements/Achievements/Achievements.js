import { Container, Row, Col } from "react-bootstrap";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Achievements.css";



const Achievements = (props) => {
  const achievements = props.achievements;
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
                <AnimationOnScroll
                  key={item.id}
                  animateIn={animation}
                  animateOnce="true"
                >
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
