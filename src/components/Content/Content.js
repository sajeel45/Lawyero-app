import Banner from "../Banner/Banner";
import "./Content.css";
import Achievements from "../Achievements/Achievements";
import Success from "../Success/Success";

const Content = () => {
  return (
    <div className="content-section">
      <Banner />
      <Achievements />
      <Success />
    </div>
  );
};
export default Content;
