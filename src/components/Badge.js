import React from "react";
import conferenceLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
	render(){
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={conferenceLogo} alt="Logo de la conferencia"/>
				</div>
				<div className="Badge__section-name">
					<img className="Badge__avatar" src="https://avatars1.githubusercontent.com/u/24369034?s=460&u=a90581d13ceae3f118d917b6f2ead5f44d3a2cdd&v=4" alt="Avatar"/>
					<h1>Adrián <br/> Guillén</h1>
				</div>
				<div className="Badge__section-info">
					<h3>Frontend Engineer</h3>
					<div>@adriangube</div>
				</div>
				<div className="Badge__footer">
					#learnReact
				</div>
			</div>
		)
	}
}

export default Badge;
