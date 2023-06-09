import { Container, Row, Col } from "react-bootstrap";
import DividerGray from "../../../assets/divider-gray.svg";
import DividerGrayBottom from "../../../assets/divider-gray-bottom.svg";
import "./News.css";
import { FaArrowRight } from "react-icons/fa";



const News = (props) => {
  const newsItems = props.newsItems;
  return (
    <>
      <div
        className="divider-gray"
        style={{ backgroundImage: `url(${DividerGray})`}}
      ></div>
      <div className="news-wrapper">
        <div className="news-heading-wrapper">
          <h2 className="h2-style1">News & Insights</h2>
        </div>
        <Container>
          <Row>
            {newsItems.map((item, index) => (
              <Col lg="4" md="6" sm="12" key={index}>
                <div className="news-main-wrapper" key={index}>
                  <div className="news-item-wrapper">
                    <div className="news-image-wrapper">
                      <img src={item.img} alt="cover" />
                    </div>
                    <div className="news-content-wrapper">
                      <div className="news-date-wrapper">
                        <span>{item.date}</span>
                      </div>
                      <div className="news-description-wrapper">
                        <a href={item.link}>{item.description}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            <div className="news-button-wrapper col-xs-12 text-center">
              <a
                href="http://bsmthemes.com/demo/lawyero/blog/"
                className="secondary-button"
              >
                Read More Posts
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </Row>
        </Container>
      </div>
      <div
        className="divider-gray-bottom"
        style={{
          backgroundImage: `url(${DividerGrayBottom})`
        }}
      ></div>
    </>
  );
};
export default News;
