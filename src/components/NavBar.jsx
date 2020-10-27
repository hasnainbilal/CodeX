import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                            <NavLink className="navbar-brand" id="navbar-brand" to="/home">CodeX</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ml-auto">
                                    <NavLink activeClassName="active_menu" className="nav-link" to="/home">Home</NavLink>
                                    <NavLink activeClassName="active_menu" className="nav-link" to="/about">About</NavLink>
                                    <NavLink activeClassName="active_menu" className="nav-link" to="/service">Service</NavLink>
                                    <NavLink activeClassName="active_menu" className="nav-link" to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </nav> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;