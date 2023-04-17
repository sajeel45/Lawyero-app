import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import "./Achievements.css";

const achievements = [
  {
    id: 1,
    title: "20+ Years of Experience",
    description:
      "We are in the law industry for more than 20 years with more than 98% of client satisfaction",
  },
  {
    id: 2,
    title: "Qualified And Experienced Attorneys",
    description:
      "Our team is the best in the business. We are team of attorneys which are passionate about their jobs.",
  },
  {
    id: 3,
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
          <div className="achievements-wrapper">
            {achievements.map((item, index) => (
              <div className="achievement-wrapper" key={index}>
                <div className="op-why-choose-section-style-2">
                <div className="op-why-choose">

                <div className="icon-wrapper"></div>
                <Container>
                <div className="title-wrapper">
                  <h4>{item.title}</h4>
                </div>
                <div className="description-wrapper">
                  <p>{item.description}</p>
                </div>
                </Container>
              </div>
              </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Achievements;
