import library from '../../assets/lawbuilding/lawbuilding.jpg'
import { Container,Row,Col } from 'react-bootstrap';
import './Library.css';


const Library = () =>{
    return(
        <>
        
            
        <div className='library-wrapper'>
            
            <div className='library-background-wrapper dark-color-overlay-over-image' style={{backgroundImage:`url(${library})`}}></div>
            <Container>
                <Row>
                    <Col>
                    <div className='description-wrapper'></div>
                    </Col>
                </Row>
            </Container>
            
            
        </div>
        

        
        </>
        
    )
}
export default Library;