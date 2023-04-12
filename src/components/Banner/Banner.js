import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/contentbanners/banner1.jpg";
import banner2 from "../../assets/contentbanners/banner2.jpg";
import banner3 from "../../assets/contentbanners/banner3.jpg";
import "./Banner.css";

const settings = {
  dots: true,
  autoplay:false,
  focusOnSelect:true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Banner = () => {
  return (
    <section className="op-slogan-section op-title-wrapper dark-color-overlay-over-image">
      <Container>
        <div className="page-content-container">
          <Slider {...settings} className="op-banner">
            <div className="item">
              <img src={banner1} alt="banner" />
              <div class="carousel-caption">
                <h2 class="h1style">Your Consultant for every legal Issue</h2>
                <a
                  class="primary-button button-default btn-4 btn-4c icon-arrow-right"
                  href="http://bsmthemes.com/demo/lawyero/who-we-are/"
                >
                  Find out More
                </a>
              </div>
            </div>
            <div>
              <img src={banner2} alt="banner" />
              <div class="carousel-caption">
                <h2 class="h1style">Get the legal help you are looking for!</h2>
                <a
                  class="primary-button button-default btn-4 btn-4c"
                  href="http://bsmthemes.com/demo/lawyero/who-we-are/"
                >
                  Get Appointment<i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div>
              <img src={banner3} alt="banner" />
              <div class="carousel-caption">
                <h2 class="h1style">Your Consultant for every legal Issue</h2>
                <a
                  class="primary-button button-default btn-4 btn-4c icon-arrow-right"
                  href="http://bsmthemes.com/demo/lawyero/who-we-are/"
                >
                  Find out More
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};
export default Banner;
