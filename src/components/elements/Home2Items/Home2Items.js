import Poster from "../HomePoster/Poster";
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
import {posterdata,achievements,successItems,aboutItems,featuresItems,practiceItems,newsItems
,teamMembers,questions,feedbackItems,count_captions} from '../../../data/data';

const Home2Items = () =>{
    return(
        <div>
            <Poster posterdata={posterdata} count_captions={count_captions}/>
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
        </div>
    )
}
export default Home2Items;