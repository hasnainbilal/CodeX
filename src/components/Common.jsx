import React from 'react';
import { NavLink } from 'react-router-dom';

const Common =  (props) => {
    return (
        <React.Fragment>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg ">
                    <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                                        <h1> 
                                            {props.title}<strong className="brand-name">{props.brand}</strong>
                                        </h1>
                                        <h2 className="my-3">
                                            We are the team of talented web developers. We put <strong className="brand-name"> life</strong> to your designs
                                        </h2>
                                        <div className="mt-3">
                                            <NavLink to={props.visit} className="btn-get-started">{props.btn}</NavLink>
                                        </div>
                                    </div>
                                        <div className="col-md-6  order-2 order-lg-2 header-img" id="header-img">
                                            <img src={props.imgsrc} className="img-fluid animated" alt="Common img"/>
                                        </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Common;