import Header from "../../common/Header/Header";
import AboutUsItems from "../../elements/AboutUsItems/AboutUsItems";
import Footer from "../../common/Footer/Footer";
import { schedule } from "../../../data/data";

const AboutUs = () =>{
    return(
        <div>
            <Header />
            <AboutUsItems />
            <Footer schedule={schedule}/>
            </div>
        )
}
export default AboutUs;