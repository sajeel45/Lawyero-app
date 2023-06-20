import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Team.css';



const Team = (props) =>{

    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const teamMembers = props.teamMembers;
    return(
        
        <div className='team-section-wrapper' style={{backgroundColor:props.backgroundColor}}>
            <div className='team-section-heading' style={{padding:props.padding}}>
                <h2 className={`h2-style1 h2-style1-${props.newStyle}`} style={{color:props.color}}>Our Team</h2>
            </div>
            <Container>
            <div className='team-section-main-wrapper'>
                <Slider {...settings}>
                    {teamMembers.map((member,index)=>(
                <div className='team-section-item-wrapper' id='team-section-item-wrapper' key={index}>
                    <a href={member.link}>
                    <div className='team-image-wrapper'>
                        <div className='svg-style'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"> <polygon fill="#fff" points="0,0 45,0 0,45 0,0" style={{fill:props.fill}}></polygon></svg>
                        </div>
                        <div  className='team-member-image'>  
                        <img src={member.img} alt='teamMember'/>
                        </div>
                        <div className='svg-style-bottom' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" > <polygon fill="#ffffff"  points="0,60 1440,60 1440,0 0,59.234" style={{fill:props.fill}} ></polygon></svg>
                        </div>
                    </div>
                    <div className='team-content-wrapper' style={{borderBottom:props.borderBottom,marginBottom:props.marginBottom}}>
                        
                        <div className='member-name-wrapper'>
                            <span className='member-name-styling'>{member.name}</span>
                        </div>
                        <div className='member-specialization-wrapper'>
                            <span>{member.specialization}</span>
                        </div>
                        
                    </div>
                    </a>
                    
                </div>
                ))}
                </Slider>
            </div>
            </Container>
            
        </div>
        
    )
}
export default Team;