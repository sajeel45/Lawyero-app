import library from "../../../assets/AboutUsFeatures/library.jpg";
import window from "../../../assets/AboutUsFeatures/window_img.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css"
import "./FeatureSection.css";

const FeatureSection = (props) => {
  const featureSection = props.featureSection;
  const featureSection2 = props.featureSection2;
  return (
    
    <div className="featureSection-wrapper">
      <div className="featureSection-top-wrapper">
        <div className="featureSection-top-image-wrapper">
          <img src={library} alt="library" />
        </div>
        
        <div className="featureSection-top-items-wrapper">
        
          <div className="featureSection-top-heading-wrapper">
            <AnimationOnScroll animateIn="animate__zoomIn" animateOnce="true">
            <h2 className="h2-style3">Why Choose Us</h2>
            </AnimationOnScroll>
          </div>
          {featureSection.map((item, index) => (
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
            <div key={index} className="featureSection-item-main-wrapper">
              
              <div className="featureSection-icon-wrapper">
                <span>{item.icon}</span>
              </div>
              <div className="featureSection-content-wrapper">
                <h4>{item.caption}</h4>
                <p>{item.description}</p>
              </div>
              
            </div>
          </AnimationOnScroll>
          ))}
        </div>
      </div>
      
      <div className="featureSection-bottom-wrapper">
        <div className="featureSection-bottom-items-wrapper">
          <div className="featureSection-bottom-heading-wrapper">
            <AnimationOnScroll animateIn="animate__zoomIn" animateOnce="true">
            <h2 className="h2-style3">We Are Best in Business</h2>
            </AnimationOnScroll>
          </div>
          {featureSection2.map((item, index) => (
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
            <div className="featureSection-item-main-wrapper" key={index}>
              <div className="featureSection-icon-wrapper">
                <span>{item.icon}</span>
              </div>
              <div className="featureSection-content-wrapper">
                <h4>{item.caption}</h4>
                <p>{item.description}</p>
              </div>
            </div>
            </AnimationOnScroll>
            
          ))}
            </div>
            <div className="featureSection-bottom-image-wrapper">
              <img src={window} alt="window" />
          </div>
        
      </div>
    </div>
  );
};
export default FeatureSection;
