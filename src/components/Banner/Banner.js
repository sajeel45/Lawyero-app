import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import {Container,Row} from "react-bootstrap";


const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const Banner = (props) => {

  const bannerImages = props.bannerImages;

  return (
    <Row>
    <section className="op-slogan-section op-title-wrapper dark-color-overlay-over-image">
        <div className="page-content-container">
          <Slider {...settings} autoplay="true" autoplaySpeed={3000} className="op-banner">
            {bannerImages.map((item, index)=>(
            <div className="item" key={index}>
              <img src={item.src} alt="banner" />
                <div className="carousel-caption">
                <Container>
                  <h2 className="h1style">{item.heading}</h2>
                  <a
                    className="primary-button button-default"
                    href={item.link}
                  >
                    {item.caption}
                    <span>{item.icon}</span>
                  </a>
                  </Container>
                </div>
            </div>
            ))}
          </Slider>
        </div>
    </section>
    </Row>
  );
};
export default Banner;
