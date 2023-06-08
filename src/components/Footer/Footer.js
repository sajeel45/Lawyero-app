import logo from '../../assets/logo/logo.png';
import { FaArrowRight,FaChevronRight,FaFacebook,FaTwitter,FaLinkedin,FaYoutube} from 'react-icons/fa';
import { Container,Row,Col } from 'react-bootstrap';
import './Footer.css';

const schedule = [
    {
        id:1,
        day:'Mon',
        timing:'9:00am-5:00pm'
    },
    {
        id:2,
        day:'Tue',
        timing:'9:00am-5:00pm'
    },
    {
        id:3,
        day:'Wed',
        timing:'9:00am-3:00pm'
    },
    {
        id:4,
        day:'Thurs',
        timing:'9:00am-3:00pm'
    },
    {
        id:5,
        day:'Fri',
        timing:'9:00am-3:00pm'
    },
    {
        id:6,
        day:'Sat-Sun',
        timing:'Closed'
    },
    
]

const Footer = () => {
    return(
        <>
        <div className='footer-wrapper'>
            <Container>
                <Row>
                <Col md='4' sm='6' className='footer-description-wrapper'>
                <img src={logo} alt='logo'/>
                <p>Lawyero is the ultimate theme for the attorneys and law firms that best suits their requirements. It is composed of large number of components and is made with love.</p>
                <a className="contact-button" style={{top:'10%'}} href="https://themeforest.net/item/lawyero-attorneys-lawyer-wordpress-theme/21210150" target="_blank" rel="noopener">
                <span><FaArrowRight/></span>Buy Now</a>
                </Col>
            <Col md='4' sm='6' className='legal-advert-wrapper'>
                <h3><span className='primary-color'>Legal</span>Advert</h3>
                <p>The information on this website is for general information purposes only.
                     Nothing on this site should be taken as legal advice for any individual case or situation.
                     This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</p>
            </Col>
            <Col md='4' sm='6' className='openingHours-wrapper'>
                <div className='openingHours-heading-wrapper'>
                    <h3><span className='primary-color'>Opening</span>Hours</h3>
                </div>
                {schedule.map((item,index)=>(
                <div className='schedule-wrapper' key={index}>
                    
                    <div className='schedule-day-wrapper'>
                    <span style={{color:'white'}}><FaChevronRight color='white'/>{item.day}</span>
                    </div>
                    <div className='schdeule-time-wrapper'>
                       <p style={{color:'white'}}>{item.timing}</p>
                    </div>
                </div>
                ))}
            </Col>
            
            </Row>
            </Container>
        </div>
        <div className='footer-bottom'>
            <Container>
                <Row>
                    <Col className='col-sm-6 col-xs-12 copyrights'>© Copyrights Lawyero 2019. All Rights Reserved.</Col>
                    <Col className='col-sm-6 col-xs-12 social-icons'>
                        <ul>
                            <li><a href='#'><FaFacebook color='white' size='20px'/></a></li>
                            <li><a href='#'><FaTwitter color='white' size='20px'/></a></li>
                            <li><a href='#'><FaLinkedin color='white' size='20px'/></a></li>
                            <li><a href='#'><FaYoutube color='white' size='20px'/></a></li>
                        </ul>
                    </Col>
                </Row>
                </Container>
        </div>
        </>
    )
}
export default Footer;