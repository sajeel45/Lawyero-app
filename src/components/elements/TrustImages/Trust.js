import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Trust.css';

const Trust = (props) => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite:true,
        arrows:true
      };
      const images = props.customerimages;
    return(
        <div style={{marginTop:"100px"}}>
            <h2 className="h2-style1">
            Customers Who Trust Lawyero
            </h2>
        <Slider {...settings}>
            {images.map((item,index)=>(
                <div className="customers-trust-wrapper" key={index} >
                    <div className="customers-image-wrapper">
                        <img src={item.img} alt="img"/>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    )
}
export default Trust;