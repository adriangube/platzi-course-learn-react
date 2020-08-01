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
					<img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar"/>
					<h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
				</div>
				<div className="Badge__section-info">
					<h3>{this.props.jobTitle}</h3>
					<div>@{this.props.twitter}</div>
				</div>
				<div className="Badge__footer">
					#learnReact
				</div>
			</div>
		)
	}
}

export default Badge;
