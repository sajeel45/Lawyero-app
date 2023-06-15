import { Container, Row, Col } from "react-bootstrap";
import pageHeader from "../../../assets/aboutus/page-heading-1.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-wrapper">
        <Row>
          <section
            style={{ backgroundImage: `url(${pageHeader})` }}
            className="bg-styling dark-color-overlay-over-image"
          >
            <div>
              <Row>
                <Col sm="12" className="aboutUs-text-wrapper">
                  <h2>Who We Are</h2>
                </Col>
              </Row>
            </div>
          </section>
        </Row>
        <div className="about-us-description-wrapper">
          <div className="about-us-paragraphs">
            <h2 class="secondary-color default">
              We are all About Our Clients
            </h2>
            <div className="paragraphs-wrapper">
            <p>Clients entrust us to help them achieve their goals with their legal matters to grow and we never take that trust for granted. At lawyero we consider our clients are our own family member and provide them with care and counseling they deserve.</p>
            <p>Character, Hard Work, and Compassion! These three components are the pillars to making sure we provide the best service to the clients we represent.</p>
            <p>Whether its a matter of child custody or family law we are here to help. We also specialize in auto accident and injuries related to auto mobile industry. You should be compensated for any injury that you encountered whether at work or by someone else negligance.</p>
            <p>If you think your case falls in any of the above categories Give Us a Call.</p>
            </div>
          </div>
          <div className="mission-description-wrapper panel-grid-cell">
          <h3 class="white default">Our Mission	</h3>
          <p>We never take that trust for granted. We learn our clients' needs and expectations; we communicate openly; we follow up frequently; we respond timely; and we are always available. In short, we develop a relationship with our clients. Our clients’ goals become our goals. We provide aggressive and professional legal representation to every client in order to ensure his or her issue is resolved in the best possible manner.</p>

          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
