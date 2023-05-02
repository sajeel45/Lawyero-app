import { FaCar, FaSwimmer,FaChild,FaEuroSign,FaWallet,FaBullhorn,FaBalanceScale,FaFutbol } from 'react-icons/fa';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './Practice.css';
import { Container,Row,Col } from 'react-bootstrap';

const items = [
    {
        id:1,
        title:'Family Law',
        icon:<FaBalanceScale size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/family-law/',
    },
    {
        id:2,
        title:'Child Custody',
        icon:<FaChild size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/child-custody/',
    },
    {
        id:3,
        title:'Auto Accidents',
        icon:<FaCar size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/auto-accidents/',
    },
    {
        id:4,
        title:'Business Law',
        icon:<FaEuroSign size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/business-law/',
    },
    {
        id:5,
        title:'Internet Fraud',
        icon:<FaWallet size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/internet-fraud/',
    },
    {
        id:6,
        title:'Sports Injury',
        icon:<FaFutbol size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/sports-injury/',
    },
    {
        id:7,
        title:'Emergency Law',
        icon:<FaBullhorn size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/emergency-law/',
    },
    {
        id:8,
        title:'Drowning Law',
        icon:<FaSwimmer size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/business-law/',
    }
]
const Practice = () =>{
    return(
        <>
        <Container>
            <div className='practice-section-wrapper'>
                <div className='practice-section-heading-wrapper'>
                    <h2 className='h2-style1'>Practice Areas</h2>
                </div>
                <Row>
                    {items.map((item,index)=>(
                        <Col
                        lg="3"
                        sm="12"
                        md="6"
                        className='practice-section-items-wrapper'
                        key={index}
                        style={[1,3,4,6].includes(index) ? {backgroundColor:'#1a2431'}:{backgroundColor:'#13cab4'}}
                        
                    >
                    <AnimationOnScroll animateIn='animate__flipInY' animateOnce='true'>
                    <div className='practice-section-item-wrapper'>
                        <a href={item.link} >
                        <div className='practice-section-icon-wrapper'>
                            <span>{item.icon}</span>
                        </div>
                        <div className='practice-section-content-wrapper'>
                            <p>{item.title}</p>
                        </div>
                        </a>
                    </div>
                    </AnimationOnScroll>
                     </Col>
                    //  {index == 3 ? </Row><Row> : ""}
                    ))}
                     </Row>
                </div>
            </Container>

        </>
    )
}
export default Practice;