import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import banner1 from "./assets/contentbanners/banner1.jpg";
import banner2 from "./assets/contentbanners/banner2.jpg";
import banner3 from "./assets/contentbanners/banner3.jpg";
import {FaArrowRight} from "react-icons/fa";

const captions = [
  {
    id:1,
    src:banner1,
    heading:'Your Consultant for every legal Issue',
    caption:'Find out More',
    icon:<FaArrowRight />,
    link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  },
  {
    id:2,
    src:banner2,
    heading:'At Lawyero We Are For Your Help',
    caption:'Get Appointment',
    icon:<FaArrowRight />,
    link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  },
  {
    id:3,
    src:banner3,
    heading:'Get the legal help you are looking for!',
    caption:'Find out More',
    icon:<FaArrowRight />,
    link:'http://bsmthemes.com/demo/lawyero/who-we-are/'
  }
];

function App() {
  
  
  return (
    <div>
      <Header />
      {/* <Banner images = {captions}/> */}
      <Content />
      
    </div>
  );
}

export default App;

