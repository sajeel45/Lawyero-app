import customer1 from "../../assets/customers/customer1.jpeg";
import customer2 from "../../assets/customers/customer2.jpeg";
import customer3 from "../../assets/customers/customer3.jpeg";
import background from '../../assets/feedbackBackground/feedbackbackground.jpg';
import feedbackDivider from '../../assets/feedbackdivider.svg'
import { Container, Row, Col } from "react-bootstrap";
import "./FeedBack.css";

const items = [
  {
    id: 1,
    img: customer1,
    companyname: "Parag States",
    description:
      "Our business was stuck in one of complex legal issue and one of our clients suggest team Lawyero. Now they are our official legal team which help us in numerous cases. Recommended to all!",
    designation: "Founder",
    name: "JohnKerry",
  },
  {
    id: 2,
    img: customer2,
    companyname: "Daily Times Network",
    description:
      "Team Lawyero is the best. Their team is awesome and when we visited their office their team welcomed us and make us feel really at home. They not only took our case but also helped us understand the complexity of the case. They fought for us and get the desired results soon. Thank you team lawyero! You are AWESOME.",
    designation: "Assistant Finance Manager",
    name: "Grant Josh",
  },
  {
    id: 3,
    img: customer3,
    companyname: "Opus International Ltd",
    description:
      "When we needed the legal assistance Lawyero came to our rescue. They took our case and get it solved in no time. Now when ever we need any assistance for legal matters we look no further then the lawyers at Lawyero. Thanks team Lawyero you are the best!",
    designation: "CEO Operations",
    name: "Jessica Berrara",
  },
];

const Feedback = () => {
  return (
    <>
      <div style={{backgroundImage:`url(${feedbackDivider})`}} className="feedback-divider" ></div>
      <div className="feedback-section-wrapper dark-color-overlay-over-image" style={{backgroundImage:`url(${background})`}}>
        <div className="feedback-heading-wrapper">
          <h2 class="default h2-style2">What Our Customers Say</h2>
        </div>
      </div>
      
    </>
  );
};

export default Feedback;
