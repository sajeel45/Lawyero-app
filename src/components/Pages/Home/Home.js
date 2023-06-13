import React from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { schedule } from "../../../data/data";
import HomeItems from "../../elements/HomeItems/HomeItems";

function Home(){
    return (
        <div>
            <Header />
            <HomeItems />
            <Footer schedule={schedule}/>
        </div>
    )
}

export default Home;