import { Container, Row, Col } from "react-bootstrap";
import NewsCover1 from "../../assets/news/legal-help.jpg";
import NewsCover2 from "../../assets/news/hammer.jpg";
import NewsCover3 from "../../assets/news/lawyer.jpg";
import NewsCover4 from "../../assets/news/emergency.jpg";
import NewsCover5 from "../../assets/news/emergency-1.jpg";
import NewsCover6 from "../../assets/news/accident.jpg";
import DividerGray from "../../assets/divider-gray.svg";
import DividerGrayBottom from "../../assets/divider-gray-bottom.svg";
import "./News.css";
import { FaArrowRight } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    img: NewsCover1,
    description: "When to seek legal help? Important to know when",
    date: "Dec, 25 2017",
    link: "http://bsmthemes.com/demo/lawyero/when-to-seek-legal-help/",
  },
  {
    id: 2,
    img: NewsCover2,
    description: "Seek immediate legal advice when most needed",
    date: "Dec, 25 2017",
    link: "http://bsmthemes.com/demo/lawyero/if-you-are-involved-in-any-of-the-following-incidents-then-you-should-seek-immediate-legal-advice/",
  },
  {
    id: 3,
    img: NewsCover3,
    description: "What it takes to be a lawyer (the untold story)",
    date: "Dec, 25 2017",
    link: "http://bsmthemes.com/demo/lawyero/what-it-takes-to-be-a-lawyer/",
  },
  {
    id: 4,
    img: NewsCover4,
    description: "US government provides emergency help",
    date: "Dec, 25 2017",
    link: "http://bsmthemes.com/demo/lawyero/us-government-provides-emergency-help/",
  },
  {
    id: 5,
    img: NewsCover5,
    description:
      "Can the Police Search My Car For Drugs based on suspicion only?",
    date: "Dec, 23 2017",
    link: "http://bsmthemes.com/demo/lawyero/can-the-police-search-my-car-for-drugs/",
  },
  {
    id: 6,
    img: NewsCover6,
    description: "Five Things To Consider After An Accident",
    date: "Dec, 23 2017",
    link: "http://bsmthemes.com/demo/lawyero/five-things-to-consider-after-an-accident-2/",
  },
];

const News = () => {
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
