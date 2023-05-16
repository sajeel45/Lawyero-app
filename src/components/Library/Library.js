import library from '../../assets/lawbuilding/lawbuilding.jpg'
import { Container,Row,Col } from 'react-bootstrap';
import './Library.css';


const Library = () =>{
    return(
        <>
        
            
        <div className='library-wrapper'>
            
            <div className='library-background-wrapper dark-color-overlay-over-image panel-grid-cell' style={{backgroundImage:`url(${library})`}}></div>
            <Container>
                <Row>
                    <Col>
                    <div className='library-description-wrapper'>
                        <div className='library-description'>
                        <h2>We Treat Every Case Equally With Same Attention And Dedication Because Every Client Matters.</h2>
                        </div>
                    </div>
                    <div className='library-button-wrapper'>
                    <a href="http://bsmthemes.com/demo/lawyero/contact/" class="transparent-button request-button">Request Free Consultation</a>
                    </div>
                    </Col>
                </Row>
            </Container>
            
            
        </div>
        

        
        </>
        
    )
}
export default Library;