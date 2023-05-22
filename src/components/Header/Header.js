// import {Link} from "react-router-dom";
import TopHeader from './TopHeader/TopHeader';
import "./Header.css";
import BottomHeader from './BottomHeader/BottomHeader';


const Header = () =>{
  return (
    <header className="header fixed-header active-top-bar">
        <TopHeader />
        <BottomHeader />
    </header>
  )
}
export default Header;