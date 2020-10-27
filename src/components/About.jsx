import React from 'react';
import img from "../images/about.png";
import Common from "./Common";

const About =  () => {
    return (
        <React.Fragment>
            <Common 
                title="Grow your business with " 
                brand="CodeX"
                imgsrc={img}
                btn="Contact Us"
                visit="/contact"
            />
        </React.Fragment>
    );
}

export default About;