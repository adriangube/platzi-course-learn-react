import React from "react";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BadgeNew extends  React.Component {
    render(){
        return (
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Adrián"
                                lastName="Guillén"
                                twitter="adriangube"
                                jobTitle="Frontend Engineer"
                                avatarUrl="https://avatars1.githubusercontent.com/u/24369034?s=460&u=a90581d13ceae3f118d917b6f2ead5f44d3a2cdd&v=4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;