import Form from "react-bootstrap/Form";
import { Container} from "react-bootstrap";
import { FaPhone, FaFax, FaLocationArrow } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-section-wrapper">
        <div className="address-section-wrapper">
          <Container>
            <div className="address-section-heading-wrapper">
              <h2 className="h2-style3">Get In Touch</h2>
            </div>
            <div className="address-section-contact-wrappper">
              <div>
                <FaPhone color="black" size="15px" />
                <a className="semi-bold" href="tel:123-456-7890">
                  123-456-7890
                </a>
              </div>
              <div className="fax-wrapper">
                <FaFax color="black" size="15px" />
                <a className="semi-bold" href="tel:123-456-7890">
                  123-456-7890
                </a>
              </div>
            </div>
            <div className="address-section-content-wrapper">
              <div className="head-office-address">
                <h4>Head Office</h4>
                <FaLocationArrow
                  color="black"
                  style={{ marginRight: "10px" }}
                />
                <span>
                  4th Floor ABC Plaza Downtown, March Street, Sydney.
                </span>
              </div>
              <div className="regional-office-address">
                <h4>Regional Office</h4>
                <FaLocationArrow
                  color="black"
                  style={{ marginRight: "10px" }}
                />
                <span>
                  {" "}
                  4th Floor ABC Plaza Downtown, March Street, Sydney.
                </span>
              </div>
            </div>
          </Container>
        </div>

        <div className="consultation-section-wrapper">
          <div className="consultation-heading-wrapper">
            <h3 className="h2-style3">Schedule A Free Consultation</h3>
          </div>
          <div className="consultation-form-wrapper">
            <Form>
              <Form.Group className="mb-5" controlId="ControlId1">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-5" controlId="ControlId2"> 
              <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-5" controlId="ControlId3">
              <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className='mb-5'>
              <Form.Select>
                <option>...</option>
                <option value="1">Your Case Falls In</option>
                <option value="2">Family Law</option>
                <option value="3">Child Custody</option>
                </Form.Select>
              </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={6} placeholder="Tells Us About Your Case"/>
            </Form.Group>
            </Form>
          </div>
          <div className="contact-button-wrapper">
            <a href="#" className="contactUs-button">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
