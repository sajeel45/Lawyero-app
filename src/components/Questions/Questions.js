import { Container, Row, Col } from "react-bootstrap";
import "./Questions.css";

const questions = [
  {
    id: 1,
    question: "Do I Have A Case?",
    description:
      "The answer of this question depends upon situation to situation. The best answer can only be achieved once you contact one of attorney who will guide you.",
  },
  {
    id: 2,
    question: "Which Areas Do You Cover?",
    description:
      "We cover multiple areas mainly involving Family Law, Child Law, Emergency Law and Business Law. The complete list of all the practice areas can be found on this website.",
  },
  {
    id: 3,
    question: "Do Hiring You Guarantee Results?",
    description:
      "The short answer to this question is No. Every case is different and prior results although show very high success rate but it still does not guarantee the same outcome.",
  },
  {
    id: 3,
    question: "What Is Attorney Customer Relationship?",
    description:
      "The initial consultation doesnot include Attorney Customer relationship. Only once you hire us then the attorney customer relationship is built.",
  },
  {
    id: 5,
    question: "What Is Your Consultation Fees?",
    description:
      "The consultation is absolutely free. Yes you have read it right absolutely free. Once you hire us for your case we only charge then.",
  },
  {
    id: 6,
    question: "Do You Screen All The Information You Get?",
    description:
      "At lawyero we treat privacy very strictly. All the information that you provide is confidential and wont be leaked under any circumstances.",
  },
];

const Questions = () => {
  return (
    <>
      
  <div className="questions-section-wrapper">
    <h2 className="h2-style1">Frequently Asked Questions</h2>
    <Container>
    <Row>
      {questions.map((item, index) => (
        <Col lg="6" md="6" sm="12">
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
