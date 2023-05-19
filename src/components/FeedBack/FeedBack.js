import customer1 from "../../assets/customers/customer1.jpeg";
import customer2 from "../../assets/customers/customer2.jpeg";
import customer3 from "../../assets/customers/customer3.jpeg";
import background from "../../assets/feedbackBackground/feedbackbackground.jpg";
import feedbackDivider from "../../assets/feedbackdivider.svg";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeedBack.css";

const items = [
  {
    id: 1,
    img: customer1,
    companyname: "Parag States",
    feedback:
      "Our business was stuck in one of complex legal issue and one of our clients suggest team Lawyero. Now they are our official legal team which help us in numerous cases. Recommended to all!",
    designation: "Founder",
    name: "JohnKerry",
  },
  {
    id: 2,
    img: customer2,
    companyname: "Daily Times Network",
    feedback:
      "Team Lawyero is the best. Their team is awesome and when we visited their office their team welcomed us and make us feel really at home. They not only took our case but also helped us understand the complexity of the case. They fought for us and get the desired results soon. Thank you team lawyero! You are AWESOME.",
    designation: "Assistant Finance Manager",
    name: "Grant Josh",
  },
  {
    id: 3,
    img: customer3,
    companyname: "Opus International Ltd",
    feedback:
      "When we needed the legal assistance Lawyero came to our rescue. They took our case and get it solved in no time. Now when ever we need any assistance for legal matters we look no further then the lawyers at Lawyero. Thanks team Lawyero you are the best!",
    designation: "CEO Operations",
    name: "Jessica Berrara",
  },
];

const Feedback = () => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    infinite:true
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${feedbackDivider})` }}
        className="feedback-divider"
      ></div>
      <div
        className="feedback-section-wrapper dark-color-overlay-over-image"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="feedback-heading-wrapper">
          <h2 class="default h2-style2">What Our Customers Say</h2>
        </div>
        <div className="feedback-slider-wrapper">
          
            <Container>
              <Slider {...settings}>
              {items.map((item, index) => (
              <div key={index}>
                <div className="feedback-content-wrapper">
                  <div className="customer-image-wrapper">
                    <img src={item.img} alt="team-member" />
                  </div>
                  <div className="company-name-wrapper">
                    <h4>{item.companyname}</h4>
                  </div>
                  <div className="feedback-wrapper">
                    <p>{item.feedback}</p>
                  </div>
                  <div className="customer-designation-wrapper">
                    <p>{item.designation}</p>
                  </div>
                  <div className="customer-name-wrapper">
                    <p>{item.name}</p>
                  </div>
                </div>
                </div>
                ))}
              </Slider>
            </Container>
          
        </div>
      </div>
    </>
  );
};

export default Feedback;
