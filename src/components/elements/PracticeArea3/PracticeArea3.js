import pageHeader from "../../../assets/aboutus/page-heading-1.jpg";
import { Container,Row,Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import family from "../../../assets/practiceAreas/family.jpg";
import "./PracticeArea3.css";

const practiceItem = [
    {
        id:9,
        img:family,
        caption:'Family Law',
        description:'Family law involves a range of matters that are usually very personal, unique and emotionally challenging.'
  }
]

const PracticeArea3 = (props) => {
    const items = props.practiceAreas;
    const copiedElements = items.slice(0,8);
    const newItems = copiedElements.concat(practiceItem)
    return(
        <div className="practice-area-wrapper">
            <div className="practiceArea-top-wrapper">
                <section className="pageHeader-img-wrapper dark-color-overlay-over-image" style={{ backgroundImage: `url(${pageHeader})` }}>
            <div>
            <Row>
                <Col className="pageHeader-heading" sm="12">
                <h2>Practice Areas 3 Column </h2>
                </Col>
            </Row>
            </div>
            </section>
            </div>
            <div className="practice-area-bottom-wrapper">
            <Container className="bottom-content">
                <h2 className="h2-style1">Practice Areas</h2>
                <p>At lawyero we practice almost all areas of life. Some of the most notable practice areas in which we have helped number of our clients to achieve their goals according to the laws are as follows:</p>
                <div className="practiceItem-wrapper">
                    <Row>
                {newItems.map((item,index)=>(
                    <Col md="4" key={index}>
                    <div className="practice-item">
                    <img src={item.img} alt="practice-item-image"/>
                            <div className="practiceItem-content">
                                <h4><Link to="#" className="nav-stying">{item.caption}</Link></h4>
                                <p>{item.description}</p>
                                <div className="learnMore-button-wrapper">
                            <a className="button-style " href="http://bsmthemes.com/demo/lawyero/our-services/family-law/">Learn More<span><FaArrowRight /></span></a>
                            </div>
                            </div>
                    </div>
                    </Col>
                ))}
                </Row>
                </div>
    </Container>
            </div>
        </div>
    )
}
export default PracticeArea3;