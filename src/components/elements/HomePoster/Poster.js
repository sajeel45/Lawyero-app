import { Container } from "react-bootstrap";
import Typist from 'react-text-typist';
import './Poster.css';

const Poster = (props) =>{
    const data = props.posterdata;
    const captions = props.count_captions;
    return(
        <div>
        {data.map((item,index)=>(
        <div className="home-poster-wrapper" key={index}>    
            <div className="poster-wrapper">
                <img src={item.img} alt="poster" style={{marginTop:"100px"}}/>
            </div>
            <Container>
            <div className="caption-wrapper">
                <h2>
                    <span className="pre-ticker-text">{item.caption}</span>
                        <span key={index}> 
                     <Typist sentences={captions} loop={false}/>
                    </span>
                </h2>
            </div>
            </Container>
        </div>
        ))}
        </div>
    )
}
export default Poster;