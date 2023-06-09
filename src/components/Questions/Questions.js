import { Container, Row, Col } from "react-bootstrap";
import "./Questions.css";



const Questions = (props) => {
  const questions = props.questions;
  return (
    <>
  <div className="questions-section-wrapper">
    <h2 className="h2-style1">Frequently Asked Questions</h2>
    <Container>
    <Row>
      {questions.map((item, index) => (
        <Col lg="6" md="6" sm="12" key={index}>
          <div className="questions-wrapper">
            <div className="question-wrapper" key={index}>
              <div className="question-inner-wrapper">
                <h4><span className="letter-styling">Q.</span> {item.question}</h4>
              </div>
              <div className="question-description">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
    </Container>
  </div>


    </>
  );
};
export default Questions;
