import { useState,useEffect } from 'react'; 
import TopHeader from './TopHeader/TopHeader';
import "./Header.css";
import BottomHeader from './BottomHeader/BottomHeader';


const Header = () =>{
  const [scrollY,setScrollY] = useState(0);
  const [showTopHeader,setShowTopHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      setShowTopHeader(currentScrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className="header fixed-header active-top-bar">
        {showTopHeader && <TopHeader />}
      <BottomHeader scrolled={scrollY > 0} />
    </header>
  )
}
export default Header;