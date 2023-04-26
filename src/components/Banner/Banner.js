import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/contentbanners/banner1.jpg";
import banner2 from "../../assets/contentbanners/banner2.jpg";
import banner3 from "../../assets/contentbanners/banner3.jpg";
import "./Banner.css";
import {Container,Row} from "react-bootstrap";
import {FaArrowRight} from "react-icons/fa";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const captions = [
  {
    id:1,
    src:banner1,
    heading:'Your Consultant for every legal Issue',
    caption:'Find out More',
    icon:<FaArrowRight />,
    link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  },
  {
    id:2,
    src:banner2,
    heading:'Get the legal help you are looking for!',
    caption:'Get Appointment',
    icon:<FaArrowRight />,
    link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  },
  {
    id:3,
    src:banner3,
    heading:'Your Consultant for every legal Issue',
    caption:'Find out More',
    icon:<FaArrowRight />,
    link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  }
];

const Banner = () => {
  return (
    <Row>
    <section className="op-slogan-section op-title-wrapper dark-color-overlay-over-image">
        <div className="page-content-container">
          <Slider {...settings} autoplay="true" autoplaySpeed={3000} className="op-banner">
            {captions.map((item,index)=>(
            <div className="item" key={index}>
              <img src={item.src} alt="banner" />
                <div class="carousel-caption">
                <Container>
                  <h2 class="h1style">{item.heading}</h2>
                  <a
                    class="primary-button button-default btn-4 btn-4c icon-arrow-right"
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
