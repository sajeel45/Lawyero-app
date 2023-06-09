import banner1 from "../assets/contentbanners/banner1.jpg";
import banner2 from "../assets/contentbanners/banner2.jpg";
import banner3 from "../assets/contentbanners/banner3.jpg";
import NewsCover1 from "../assets/news/legal-help.jpg";
import NewsCover2 from "../assets/news/hammer.jpg";
import NewsCover3 from "../assets/news/lawyer.jpg";
import NewsCover4 from "../assets/news/emergency.jpg";
import NewsCover5 from "../assets/news/emergency-1.jpg";
import NewsCover6 from "../assets/news/accident.jpg";
import member1 from '../assets/members/member1.jpg';
import member2 from '../assets/members/member2.jpg';
import member3 from '../assets/members/member3.jpg';
import member4 from '../assets/members/member4.jpg';
import member5 from '../assets/members/member5.jpg';
import customer1 from "../assets/customers/customer1.jpeg";
import customer2 from "../assets/customers/customer2.jpeg";
import customer3 from "../assets/customers/customer3.jpeg";
import {FaArrowRight,FaUser,FaBriefcase,FaTrophy,FaHandshake,FaDollarSign,FaThumbsUp,FaPhoneAlt,FaCoffee,
FaLink,FaBalanceScale,FaChild,FaCar,FaEuroSign,FaWallet,FaFutbol,FaBullhorn,FaSwimmer} from "react-icons/fa";
import member from "../assets/about/member.jpg";



const bannerImages = [
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
  const achievements = [
    {
      id: 1,
      logo: <FaUser color="#63CAB5" className="icon-styling" size="60px" />,
      alt: "logo",
      title: "20+ Years of Experience",
      description:
        "We are in the law industry for more than 20 years with more than 98% of client satisfaction",
    },
    {
      id: 2,
      logo: <FaBriefcase color="#63CAB5" className="icon-styling" size="60px" />,
      alt: "logo",
      title: "Qualified And Experienced Attorneys",
      description:
        "Our team is the best in the business. We are team of attorneys which are passionate about their jobs.",
    },
    {
      id: 3,
      logo: <FaTrophy color="#63CAB5" className="icon-styling" size="60px" />,
      alt: "logo",
      title: "Awards And Achievements",
      description:
        "We at lawyero earned the best law firm award in 2017 with a success ratio of 99%.",
    },
  ];
  const successItems = [
    {
      icon: <FaHandshake color="#fafafa" className="panel-icon-styling" size="70px" />,
      id: 1,
      count: 150,
      prefix:'',
      suffix:'+',
      caption: "Customers",
    },
    {
      icon: <FaDollarSign color="#fafafa" className="panel-icon-styling" size="70px" />,
      id: 2,
      count: 20000000,
      prefix:'$',
      suffix:'',
      caption: "Recovered",
    },
    {
      icon: <FaThumbsUp color="#fafafa" className="panel-icon-styling" size="70px" />,
      id: 3,
      count: 98,
      prefix:'',
      suffix:'%',
      caption: "Success Ratio",
    },
  ];
  const aboutItems = [
    {
      id: 1,
      title: "About Firm",
      description1:
        "The attorneys of Lawyero have proven their ability to obtain excellent results on behalf of clients across industries in a wide range of disputes, from complex, international tech-based litigation to shareholder/partnership disputes and high-profile art transactions.",
      description2:
        "Contact our office today to schedule a confidential consultation with one of your attorneys to discuss the particular legal challenges you or your business is facing.",
      image: member,
      icon: <FaArrowRight />,
    },
  ];
  const featuresItems = [
    {
        id:1,
        title:'PERSONAL SERVICE',
        description:'Our attorneys are committed to you and will work vigorously to obtain the best possible recovery in your case.',
        icon:<FaLink color="#63CAB5" className="icon-styling" size="50px"/>
    },
    {
        id:2,
        title:'SCREENING FREE',
        description:'At the our law Firm, you do not have to go through a call screen. You will get to speak to an attorney directly, preferably the one who will be handling your case.',
        icon:<FaPhoneAlt color="#63CAB5" className="icon-styling" size="50px"/>
    },
    {
        id:3,
        title:'ALWAYS RESPONSIVE',
        description:'Your attorney will address any problems quickly and respect your time by promptly replying to your inquiries.',
        icon:<FaCoffee color="#63CAB5" className="icon-styling" size="50px"/>
    },
    {
        id:4,
        title:'CASE EXPERIENCE',
        description:'Our attorneys are experienced and can handle any type of injury case for you.',
        icon:<FaBriefcase color="#63CAB5" className="icon-styling" size="50px"/>
    },
];
const practiceItems = [
    {
        id:1,
        title:'Family Law',
        icon:<FaBalanceScale size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/family-law/',
    },
    {
        id:2,
        title:'Child Custody',
        icon:<FaChild size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/child-custody/',
    },
    {
        id:3,
        title:'Auto Accidents',
        icon:<FaCar size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/auto-accidents/',
    },
    {
        id:4,
        title:'Business Law',
        icon:<FaEuroSign size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/business-law/',
    },
    {
        id:5,
        title:'Internet Fraud',
        icon:<FaWallet size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/internet-fraud/',
    },
    {
        id:6,
        title:'Sports Injury',
        icon:<FaFutbol size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/sports-injury/',
    },
    {
        id:7,
        title:'Emergency Law',
        icon:<FaBullhorn size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/emergency-law/',
    },
    {
        id:8,
        title:'Drowning Law',
        icon:<FaSwimmer size='40px' color='white'/>,
        link:'http://bsmthemes.com/demo/lawyero/our-services/business-law/',
    }
];
const newsItems = [
    {
      id: 1,
      img: NewsCover1,
      description: "When to seek legal help? Important to know when",
      date: "Dec, 25 2017",
      link: "http://bsmthemes.com/demo/lawyero/when-to-seek-legal-help/",
    },
    {
      id: 2,
      img: NewsCover2,
      description: "Seek immediate legal advice when most needed",
      date: "Dec, 25 2017",
      link: "http://bsmthemes.com/demo/lawyero/if-you-are-involved-in-any-of-the-following-incidents-then-you-should-seek-immediate-legal-advice/",
    },
    {
      id: 3,
      img: NewsCover3,
      description: "What it takes to be a lawyer (the untold story)",
      date: "Dec, 25 2017",
      link: "http://bsmthemes.com/demo/lawyero/what-it-takes-to-be-a-lawyer/",
    },
    {
      id: 4,
      img: NewsCover4,
      description: "US government provides emergency help",
      date: "Dec, 25 2017",
      link: "http://bsmthemes.com/demo/lawyero/us-government-provides-emergency-help/",
    },
    {
      id: 5,
      img: NewsCover5,
      description:
        "Can the Police Search My Car For Drugs based on suspicion only?",
      date: "Dec, 23 2017",
      link: "http://bsmthemes.com/demo/lawyero/can-the-police-search-my-car-for-drugs/",
    },
    {
      id: 6,
      img: NewsCover6,
      description: "Five Things To Consider After An Accident",
      date: "Dec, 23 2017",
      link: "http://bsmthemes.com/demo/lawyero/five-things-to-consider-after-an-accident-2/",
    },
  ];  

  const teamMembers = [
    {
        id:1,
        name:'Robert Darren',
        specialization:'Bank & Finance Lawyer',
        img:member1,
        link:'http://bsmthemes.com/demo/lawyero/member/robert/'
    },
    {
        id:2,
        name:'Tady Walsh',
        specialization:'Child Custody Lawyer',
        img:member2,
        link:'http://bsmthemes.com/demo/lawyero/member/tady-walsh/'
    },
    {
        id:3,
        name:'Frank Moses',
        specialization:'Injury Expert Attorney',
        img:member3,
        link:'http://bsmthemes.com/demo/lawyero/member/frank-moses/'
    },
    {
        id:4,
        name:'Alanna',
        specialization:'Businnes Lawyer',
        img:member4,
        link:'http://bsmthemes.com/demo/lawyero/member/alanna/'
    },
    {
        id:5,
        name:'John Doe',
        specialization:'International Law Lawyer',
        img:member5,
        link:'http://bsmthemes.com/demo/lawyero/member/john-doe/'
    },
];
const questions = [
  {
    id: 1,
    question: "Do I Have A Case?",
    description:
      "The answer of this question depends upon situation to situation. The best answer can only be achieved once you contact one of attorney who will guide you.",
  },
  {
    id: 2,
    question: "Which Areas Do You Cover?",
    description:
      "We cover multiple areas mainly involving Family Law, Child Law, Emergency Law and Business Law. The complete list of all the practice areas can be found on this website.",
  },
  {
    id: 3,
    question: "Do Hiring You Guarantee Results?",
    description:
      "The short answer to this question is No. Every case is different and prior results although show very high success rate but it still does not guarantee the same outcome.",
  },
  {
    id: 3,
    question: "What Is Attorney Customer Relationship?",
    description:
      "The initial consultation doesnot include Attorney Customer relationship. Only once you hire us then the attorney customer relationship is built.",
  },
  {
    id: 5,
    question: "What Is Your Consultation Fees?",
    description:
      "The consultation is absolutely free. Yes you have read it right absolutely free. Once you hire us for your case we only charge then.",
  },
  {
    id: 6,
    question: "Do You Screen All The Information You Get?",
    description:
      "At lawyero we treat privacy very strictly. All the information that you provide is confidential and wont be leaked under any circumstances.",
  },
];
const feedbackItems = [
  {
    id: 1,
    img: customer1,
    companyname: "Parag States",
    feedback:
      "Our business was stuck in one of complex legal issue and one of our clients suggest team Lawyero. Now they are our official legal team which help us in numerous cases. Recommended to all!",
    designation: "Founder",
    name: "JohnKerry",
  },
  {
    id: 2,
    img: customer2,
    companyname: "Daily Times Network",
    feedback:
      "Team Lawyero is the best. Their team is awesome and when we visited their office their team welcomed us and make us feel really at home. They not only took our case but also helped us understand the complexity of the case. They fought for us and get the desired results soon. Thank you team lawyero! You are AWESOME.",
    designation: "Assistant Finance Manager",
    name: "Grant Josh",
  },
  {
    id: 3,
    img: customer3,
    companyname: "Opus International Ltd",
    feedback:
      "When we needed the legal assistance Lawyero came to our rescue. They took our case and get it solved in no time. Now when ever we need any assistance for legal matters we look no further then the lawyers at Lawyero. Thanks team Lawyero you are the best!",
    designation: "CEO Operations",
    name: "Jessica Berrara",
  },
];
const schedule = [
  {
      id:1,
      day:'Mon',
      timing:'9:00am-5:00pm'
  },
  {
      id:2,
      day:'Tue',
      timing:'9:00am-5:00pm'
  },
  {
      id:3,
      day:'Wed',
      timing:'9:00am-3:00pm'
  },
  {
      id:4,
      day:'Thurs',
      timing:'9:00am-3:00pm'
  },
  {
      id:5,
      day:'Fri',
      timing:'9:00am-3:00pm'
  },
  {
      id:6,
      day:'Sat-Sun',
      timing:'Closed'
  },
  
]
export {bannerImages,achievements,successItems,aboutItems,featuresItems,practiceItems,newsItems,teamMembers
,questions,feedbackItems,schedule};