import PracticeArea from "../PracticeArea2/PracticeArea";
import { practiceAreas } from "../../../data/data";


const LayoutItems = () => {
    return(
        <div>
            <PracticeArea practiceAreas={practiceAreas}/>
        </div>
    )
}
export default LayoutItems;