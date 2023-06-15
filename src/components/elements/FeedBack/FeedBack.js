import background from "../../../assets/feedbackBackground/feedbackbackground.jpg";
import feedbackDivider from "../../../assets/feedbackdivider.svg";
import { Container} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeedBack.css";



const Feedback = (props) => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    infinite:true,
  };
  const feedbackItems = props.feedbackItems;
  return (
    <>
    <div className="feedback-main-wrapper" style={{marginTop:props.marginTop}}>
    <div
        style={{ backgroundImage: `url(${feedbackDivider})`,display:props.display }}
        className="feedback-divider"
      ></div>
      <div
        className="feedback-section-wrapper dark-color-overlay-over-image"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="feedback-heading-wrapper">
          <h2 className="default h2-style2">What Our Customers Say</h2>
        </div>
        <div className="feedback-slider-wrapper">
          
            <Container>
              <Slider {...settings}>
              {feedbackItems.map((item, index) => (
              <div key={index} className="feedback-slide">
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
      </div>
    </>
  );
};

export default Feedback;
