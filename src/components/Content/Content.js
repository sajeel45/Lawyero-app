import Banner from "../Banner/Banner";
// import banner1 from "../../assets/contentbanners/banner1.jpg";
// import banner2 from "../../assets/contentbanners/banner2.jpg";
// import banner3 from "../../assets/contentbanners/banner3.jpg";
// import {FaArrowRight} from "react-icons/fa";
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

const Content = (props) => {
  // const images = [
  //   {
  //     id:1,
  //     src:banner1,
  //     heading:'Your Consultant for every legal Issue',
  //     caption:'Find out More',
  //     icon:<FaArrowRight />,
  //     link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  //   },
  //   {
  //     id:2,
  //     src:banner2,
  //     heading:'At Lawyero We Are For Your Help',
  //     caption:'Get Appointment',
  //     icon:<FaArrowRight />,
  //     link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  //   },
  //   {
  //     id:3,
  //     src:banner3,
  //     heading:'Get the legal help you are looking for!',
  //     caption:'Find out More',
  //     icon:<FaArrowRight />,
  //     link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  //   },
  //   {
  //     id:4,
  //     src:banner3,
  //     heading:'Get the legal help you are looking for!',
  //     caption:'Find out More',
  //     icon:<FaArrowRight />,
  //     link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  //   }
  // ];
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
