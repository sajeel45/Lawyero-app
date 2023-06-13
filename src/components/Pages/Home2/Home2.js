import Header from "../../common/Header/Header";
import Home2Items from "../../elements/Home2Items/Home2Items";
import Footer from "../../common/Footer/Footer";
import { schedule } from "../../../data/data";

const Home2 = () => {
    return(
    <div>
        <Header />
        <Home2Items />
        <Footer schedule={schedule}/>
    </div>
    )
}
export default Home2;