import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () => {
    return(
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}

export default App;