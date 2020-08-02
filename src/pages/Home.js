import React from "react";
import "./styles/Home.css";
import logo from "../images/platziconf-logo.svg";
import astronautsLogo from "../images/astronauts.svg";

import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Home__container">
                    <div className="container">
                        <div className="col-6">
                            <img className="Home__logo" src={logo} alt="Logo"/>
                            <h2 className="Home__subtitle">Print your badges</h2>
                            <p className="Home__paragraph">The easiest way to manage your conference</p>
                            <div className="Home__button-container">
                                <Link to="/badges" className="btn btn-primary">Start Now</Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className="Home__astronauts-logo" src={astronautsLogo} alt="Astronauts Logo"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;