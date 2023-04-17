import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/contentbanners/banner1.jpg";
import banner2 from "../../assets/contentbanners/banner2.jpg";
import banner3 from "../../assets/contentbanners/banner3.jpg";
import "./Banner.css";
import Container from "react-bootstrap/esm/Container";
import {FaChevronRight} from "react-icons/fa";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const Banner = () => {
  return (
    <section className="op-slogan-section op-title-wrapper dark-color-overlay-over-image">
        <div className="page-content-container">
          <Slider {...settings} autoplay="true" autoplaySpeed={3000} className="op-banner">
            <div className="item">
              <img src={banner1} alt="banner" />
                <div class="carousel-caption">
                <Container>
                  <h2 class="h1style">Your Consultant for every legal Issue</h2>
                  <a
                    class="primary-button button-default btn-4 btn-4c icon-arrow-right"
                    href="http://bsmthemes.com/demo/lawyero/who-we-are/"
                  >
                    Find out More
                  </a>
                  </Container>
                </div>

            </div>
            <div className="item">
              <img src={banner2} alt="banner" />
              <div class="carousel-caption">
              <Container>
                <h2 class="h1style">Get the legal help you are looking for!</h2>
                <a
                  class="primary-button button-default btn-4 btn-4c"
                  href="http://bsmthemes.com/demo/lawyero/who-we-are/"
                >
                  Get Appointment 
                  <FaChevronRight />
                </a>
                </Container>
              </div>
            </div>
            <div className="item">
              <img src={banner3} alt="banner" />
              <div class="carousel-caption">
              <Container>
                <h2 class="h1style">Your Consultant for every legal Issue</h2>
                <a
                  class="primary-button button-default btn-4 btn-4c icon-arrow-right"
                  href="http://bsmthemes.com/demo/lawyero/who-we-are/"
                >
                  Find out More
                </a>
                </Container>
              </div>
            </div>
          </Slider>
        </div>
    </section>
  );
};
export default Banner;
