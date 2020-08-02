import React from "react";
import BadgesListItem from "./BadgesListItem";
import './styles/BadgesList.css';
import {Link} from "react-router-dom";

class BadgesList extends React.Component {
    render() {

        if(this.props.badges.length === 0){
            return (
                <div>
                    <h3>No badges where found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
                </div>
            )
        }

        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return (
                            <li key={badge.id}>
                                <BadgesListItem badge={badge} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;
