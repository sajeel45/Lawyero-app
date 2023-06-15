import {Container,Row,Col} from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import "./ContactUs.css";

const ContactUs = (props) => {
  return (
    <div className="contactUs-wrapper" style={{backgroundColor:props.backgroundColor}}>
      <Container>
        <Row className="contactUs-main-wrapper">
          <Col sm="9" xs="12">
            <p>Get the consultation For Most Complex Legal Issues.</p>
          </Col>
          <Col sm="3" xs="12" className="contact-btn">
            <a href="#contact" className={`contact-button contact-button-${props.buttonType}`} style={{textTransform:props.textTransform}}>
              Contact Us
              <span>
                <FaArrowRight />
              </span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactUs;
