import { FaCar } from 'react-icons/fa';
import { FaChild } from 'react-icons/fa';
import { FaEuroSign } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa';
import { FaBalanceScale } from 'react-icons/fa';
import { FaFutbol } from 'react-icons/fa';
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
        icon:'',
        link:'http://bsmthemes.com/demo/lawyero/our-services/business-law/',
    }
]
const Practice = () =>{
    return(
        <>
        <Container>
            <Row>
                <>
            <div className='practice-section-wrapper'>
                <div className='practice-section-heading-wrapper'>
                    <h2 className='h2-style1'>Practice Areas</h2>
                </div>
                <div className='practice-section-items-wrapper'>
                
                    {/* <Col 
                        lg="4"
                        sm="12"
                        md="6"
                        className='practice-section-items-wrapper'
                    > 
                    <AnimationOnScroll animateIn='animate__flipInY'>
                    */}
                    {items.map((item,index)=>(
                    <div className='practice-section-item-wrapper' key={index}>
                        <a href={item.link} >
                        <div className='practice-section-icon-wrapper'>
                            <span>{item.icon}</span>
                        </div>
                        <div className='practice-section-content-wrapper'>
                            <p>{item.title}</p>
                        </div>
                        </a>
                    </div>
                    ))}
                    {/* </AnimationOnScroll>
                     </Col> */}
                    
                   
                </div>
                
            </div>
            
            </>
            </Row>
            </Container>

        </>
    )
}
export default Practice;