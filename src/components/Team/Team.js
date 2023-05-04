import member1 from '../../assets/members/member1.jpg';
import member2 from '../../assets/members/member2.jpg';
import member3 from '../../assets/members/member3.jpg';
import member4 from '../../assets/members/member4.jpg';
import member5 from '../../assets/members/member5.jpg';
import './Team.css';

const members = () => [
    {
        id:1,
        name:'Robert Darren',
        specialization:'Bank & Finance Lawyer',
        img:member1
    },
    {
        id:2,
        name:'Tady Walsh',
        specialization:'Child Custody Lawyer',
        img:member2
    },
    {
        id:3,
        name:'Frank Moses',
        specialization:'Injury Expert Attorney',
        img:member3
    },
    {
        id:4,
        name:'Alanna',
        specialization:'Businnes Lawyer',
        img:member4
    },
    {
        id:5,
        name:'John Doe',
        specialization:'International Law Lawyer',
        img:member5
    },
]

const Team = () =>{
    return(
        <>
        <div className='team-section-wrapper'>
            <div className='team-section-heading'>
                <h2 className='h2-style1'>Our Team</h2>
            </div>
            <div>
                <div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Team;