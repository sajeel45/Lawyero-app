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
import {bannerImages,achievements,successItems,aboutItems,featuresItems,practiceItems,newsItems
,teamMembers,questions,feedbackItems,schedule} from '../../data/data';


const Content = () => {
  return (
    <div className="content-section">
      <Banner bannerImages={bannerImages} />
      <Achievements achievements={achievements}/>
      <Success successItems={successItems}/>
      <About aboutItems={aboutItems}/>
      <Features featuresItems={featuresItems}/>
      <Practice practiceItems={practiceItems}/>
      <News newsItems={newsItems}/>
      <Team teamMembers={teamMembers}/>
      <Library />
      <Questions questions={questions}/>
      <Feedback feedbackItems={feedbackItems}/>
      <Contact />
      <Footer schedule={schedule}/>
    </div>
  );
};
export default Content;
