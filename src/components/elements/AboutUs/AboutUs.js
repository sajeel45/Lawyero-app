import { Container } from "react-bootstrap";




const AboutUs = (props) =>{
    const data = props.aboutUs
    return(
        <div>
        {data.map((item,index)=>(
        <div className="aboutus-wrapper" key={index}>
          
            <Container>
                
                <img src={item.img} alt="page-header"/>
            </Container>
            <Container></Container>
            
        </div>
        ))}
        </div>
    )
}
export default AboutUs;