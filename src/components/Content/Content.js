import Banner from "../Banner/Banner";
import "./Content.css";
import Achievements from "../Achievements/Achievements";
import Success from "../Success/Success";
import About from "../About/About";
import Features from "../Features/Features";
import Practice from "../PracticeSection/Practice";
import News from "../News/News";
import Team from "../Team/Team";
import Library from "../Library/Library";
import Questions from "../Questions/Questions";
import Feedback from "../FeedBack/FeedBack";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Content = () => {
  return (
    <div className="content-section">
      <Banner />
      <Achievements />
      <Success />
      <About />
      <Features />
      <Practice />
      <News />
      <Team />
      <Library />
      <Questions />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
};
export default Content;
