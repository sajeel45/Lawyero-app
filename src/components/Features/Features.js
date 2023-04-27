
import { FaPhoneAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import {Container,Row,Col} from 'react-bootstrap';
import featureBackground from '../../assets/features/feature_bg.jpg';
import './Features.css';
const FeaturesItems = [
    {
        id:1,
        title:'PERSONAL SERVICE',
        description:'Our attorneys are committed to you and will work vigorously to obtain the best possible recovery in your case.',
        icon:''
    },
    {
        id:2,
        title:'SCREENING FREE',
        description:'At the our law Firm, you do not have to go through a call screen. You will get to speak to an attorney directly, preferably the one who will be handling your case.',
        icon:<FaPhoneAlt color="#63CAB5" className="icon-styling" size="40px"/>
    },
    {
        id:3,
        title:'ALWAYS RESPONSIVE',
        description:'Your attorney will address any problems quickly and respect your time by promptly replying to your inquiries.',
        icon:<FaCoffee color="#63CAB5" className="icon-styling" size="40px"/>
    },
    {
        id:4,
        title:'CASE EXPERIENCE',
        description:'Our attorneys are experienced and can handle any type of injury case for you.',
        icon:<FaBriefcase color="#63CAB5" className="icon-styling" size="40px"/>
    },
]
const Features = () => {
    return(
        <>
        <Container>
            <div className='features-wrapper'>
                <div className='features-main-wrapper'>
                    <div className='features-image-wrapper panel-grid-cell' style={{backgroundImage:`url(${featureBackground})`}}>
                        
                    </div>
                    {FeaturesItems.map((item,index)=>(
                    <div className='features-items-wrapper panel-grid-cell' key={index}>
                        <div className='icon-wrapper'>
                            <span>{item.icon}</span>
                        </div>
                        <div className='features-title-wrapper'>
                            <h4>{item.title}</h4>
                        </div>
                        <div className='features-description-wrapper'>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                
                <div className='features-bottom-wrapper'>
                    <Row>
                        <Col sm='9' xs='12'>
                            <span>Get the consultation For Most Complex Legal Issues.</span>
                        </Col>
                        <Col sm='3' xs='12' className='contact-btn'>
                            <a href='#' className='primary-button'>Contact Us</a>
                        </Col>
                    </Row>
                </div>
            </div>
            </Container>
        </>
    )
}
export default Features