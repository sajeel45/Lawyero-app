import Banner from "../Banner/Banner";
import "./Content.css";
import Achievements from "../Achievements/Achievements";
import Success from "../Success/Success";
import About from "../About/About";
import Features from "../Features/Features";
import Practice from "../PracticeSection/Practice";

const Content = () => {
  return (
    <div className="content-section">
      <Banner />
      <Achievements />
      <Success />
      <About />
      <Features />
      <Practice />
    </div>
  );
};
export default Content;
