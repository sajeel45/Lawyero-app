import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { schedule } from "../../../data/data";
import Contact from "../../elements/Contact/Contact";
import LayoutItems from "../../elements/3ColumnLayout/LayoutItems";


const PracticeArea3 = () => {
    return(
        <div>
        <Header />
        <LayoutItems />
        <Contact />
        <Footer schedule={schedule}/>
        </div>
    )
}
export default PracticeArea3;