import AboutUs from "../AboutUs/AboutUs";
import Team from "../Team/Team";
import { teamMembers,featureSection,featureSection2,customerimages,feedbackItems } from "../../../data/data";
import teamdivider from "../../../assets/teamdivider.svg";
import ContactUs from "../ContactUs/ContactUs";
import "./AboutUsItems.css";
import FeatureSection from "../FeatureSection/FeatureSection";
import Trust from "../TrustImages/Trust";
import Feedback from "../FeedBack/FeedBack";
import Contact from "../Contact/Contact";

const AboutUsItems = () => {
    return(
        <div className="aboutUsItems-wrapper">
        <AboutUs />
        <div style={{backgroundImage: `url(${teamdivider})`}} className="team-divider" >
            <Team teamMembers={teamMembers} backgroundColor="#1A2431" color="white" borderBottom="0px" marginBottom="100px" padding="100px 0 0 0"/>
        </div>
        <div className="my-btn">
            <ContactUs backgroundColor="#63CAB5" buttonType="dark" textTransform="capitalize"/>
        </div>
        <FeatureSection featureSection={featureSection} featureSection2={featureSection2}/>
        <Trust customerimages={customerimages}/>
        <Feedback feedbackItems={feedbackItems} display="none" marginTop="100px"/>
        <Contact />
        </div>
    )
}
export default AboutUsItems;