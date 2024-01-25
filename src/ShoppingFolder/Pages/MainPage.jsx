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
            <Footer />
            <Collection gentsFashion={gentsFashion} />
            <WomenCollection ladiesFashion={ladiesFashion} />

        </div>
    );
};

export default MainPage;
