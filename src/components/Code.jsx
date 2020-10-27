import React from "react";
import Card from "./Card";
import Data from "./Data";

const Code = () => {
return(
    <React.Fragment>
            <div className="container-fluid md-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                                {
                                    Data.map((value,index)=>{
                                        return <Card imgsrc={value.imgsrc} title={value.title} key={index}/>
                                    })
                                }
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
);
}

export default Code;
