import Banner from "../Banner/Banner";
import "./Content.css";
import Achievements from "../Achievements/Achievements";
import Success from "../Success/Success";
import About from "../About/About";

const Content = () => {
  return (
    <div className="content-section">
      <Banner />
      <Achievements />
      <Success />
      <About />
    </div>
  );
};
export default Content;
