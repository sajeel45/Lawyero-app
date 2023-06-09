import { AnimationOnScroll } from 'react-animation-on-scroll';
import './Practice.css';
import { Container,Row,Col } from 'react-bootstrap';


const Practice = (props) =>{
    const practiceItems = props.practiceItems
    return(
        <>
        <Container>
            <div className='practice-section-wrapper'>
                <div className='practice-section-heading-wrapper'>
                    <h2 className='h2-style1'>Practice Areas</h2>
                </div>
                <Row>
                    {practiceItems.map((item,index)=>(
                        <Col
                        lg="3"
                        sm="12"
                        md="6"
                        className='practice-section-items-wrapper'
                        key={index}
                    >
                    <AnimationOnScroll animateIn='animate__flipInY' animateOnce='true'>
                    <div className='practice-section-item-wrapper' style={[1,3,4,6].includes(index) ? {backgroundColor:'#1a2431'}:{backgroundColor:'#13cab4'}}>
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