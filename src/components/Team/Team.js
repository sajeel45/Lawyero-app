import member1 from '../../assets/members/member1.jpg';
import member2 from '../../assets/members/member2.jpg';
import member3 from '../../assets/members/member3.jpg';
import member4 from '../../assets/members/member4.jpg';
import member5 from '../../assets/members/member5.jpg';
import { Container,Row,Col } from 'react-bootstrap';
import cornerEdge from '../../assets/corner-left.svg';
import cornerBottom from '../../assets/corner-bottom.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Team.css';

const members = [
    {
        id:1,
        name:'Robert Darren',
        specialization:'Bank & Finance Lawyer',
        img:member1,
        link:'http://bsmthemes.com/demo/lawyero/member/robert/'
    },
    {
        id:2,
        name:'Tady Walsh',
        specialization:'Child Custody Lawyer',
        img:member2,
        link:'http://bsmthemes.com/demo/lawyero/member/tady-walsh/'
    },
    {
        id:3,
        name:'Frank Moses',
        specialization:'Injury Expert Attorney',
        img:member3,
        link:'http://bsmthemes.com/demo/lawyero/member/frank-moses/'
    },
    {
        id:4,
        name:'Alanna',
        specialization:'Businnes Lawyer',
        img:member4,
        link:'http://bsmthemes.com/demo/lawyero/member/alanna/'
    },
    {
        id:5,
        name:'John Doe',
        specialization:'International Law Lawyer',
        img:member5,
        link:'http://bsmthemes.com/demo/lawyero/member/john-doe/'
    },
]

const Team = () =>{
    return(
        <>
        <div className='team-section-wrapper'>
            <div className='team-section-heading'>
                <h2 className='h2-style1'>Our Team</h2>
            </div>
            <div className='team-section-main-wrapper'>
                <Slider slidesPerRow={4} slidesToScroll={1} arrows={true} accessibility='true'>
                    {members.map((member,index)=>(
                <div className='team-section-item-wrapper' key={index}>
                    <a href={member.link}>
                    <div className='team-image-wrapper'>
                        <div className='svg-style' style={{backgroundImage: `url(${cornerEdge})`}}>
                            
                        </div>
                        <div>
                        <img src={member.img} alt='teamMember'/>
                        </div>
                        <div style={{backgroundImage: `url(${cornerBottom})`}}></div>
                    </div>
                    <div className='team-content-wrapper'>
                        
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
            
        </div>
        </>
    )
}
export default Team;