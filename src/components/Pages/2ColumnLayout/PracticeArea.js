import LayoutItems from "../../elements/2ColumnLayoutItems/LayoutItems";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { schedule } from "../../../data/data";
import Contact from "../../elements/Contact/Contact";

const PracticeArea = () =>{
    return(
        <div>
            <Header />
            <LayoutItems />
            <Contact />
            <Footer schedule={schedule}/>
        </div>
    )
}
export default PracticeArea;