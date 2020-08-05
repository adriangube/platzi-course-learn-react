import React from "react";
import BadgesListItem from "./BadgesListItem";
import './styles/BadgesList.css';
import {Link} from "react-router-dom";

class BadgesList extends React.Component {
    render() {
        const badgeList = [...this.props.badges || []].reverse();
        if(badgeList.length === 0){
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
                    {badgeList.map(badge => {
                        return (
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <BadgesListItem badge={badge} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;
