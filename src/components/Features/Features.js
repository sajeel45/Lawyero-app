import {Container,Row,Col} from 'react-bootstrap';
import featureBackground from '../../assets/features/feature_bg.jpg';
import { FaArrowRight } from 'react-icons/fa';
import './Features.css';

const Features = (props) => {
    const featuresItems = props.featuresItems
    return(
        <>
        <>
            <div className='features-wrapper'>
                <div className='features-main-wrapper'>
                    <div className='features-image-wrapper panel-grid-cell' style={{backgroundImage:`url(${featureBackground})`}}></div>
                    <div className='features-items-wrapper panel-grid-cell'>
                    {featuresItems.map((item,index)=>(
                        <div className='features-item' key={index}>
                            <div className='icon-wrapper'>
                                <span>{item.icon}</span>
                            </div>
                            <div className='features-content-wrapper'>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>
                
                <div className='features-bottom-wrapper'>
                    <Container>
                        <Row className='feature-bottom-wrapper'>
                            <Col sm='9' xs='12'>
                                <p>Get the consultation For Most Complex Legal Issues.</p>
                            </Col>
                            <Col sm='3' xs='12' className='contact-btn'>
                                <a href='#contact' className='contact-button'>Contact Us<span><FaArrowRight/></span></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            </>
        </>
    )
}
export default Features