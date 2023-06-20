import { practiceAreas } from "../../../data/data";
import PracticeArea3 from "../PracticeArea3/PracticeArea3";

const layoutItems = () => {
    return(
        <div>
            <PracticeArea3 practiceAreas={practiceAreas}/>
        </div>
    )
}
export default layoutItems;