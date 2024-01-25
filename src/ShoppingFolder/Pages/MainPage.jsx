import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Collection from "../Components/Collection";
import Banner from "../Components/Banner";
import { Gents, Ladies } from "../data"
import WomenCollection from "../Components/WomenCollection";

const MainPage = () => {
    const [gentsFashion, setGentsfashion] = useState(Gents)
    const [ladiesFashion, setladiesFashion] = useState(Ladies)
    // console.log()
    return (
        <div>
            <Header />
            <Banner />

            <Collection gentsFashion={gentsFashion} />
            <WomenCollection ladiesFashion={ladiesFashion} />
            <Footer />

        </div>
    );
};

export default MainPage;
