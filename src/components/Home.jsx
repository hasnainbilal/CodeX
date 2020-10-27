import React from 'react';
import img from "../images/header.png";
import Common from "./Common";

const Home =  () => {
    return (
        <React.Fragment>
            <Common 
                title="Grow your business with " 
                brand="CodeX"
                imgsrc={img}
                btn="Get Started"
                visit="/service"
                spin={true}
            />
        </React.Fragment>
    );
}

export default Home;