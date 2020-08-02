import React from "react";

class BadgesList extends React.Component {
    render() {
        return (
            <div className="Badges__list">
                <div className="Badges__container">
                    <ul className="list-unstyled">
                        {this.props.badges.map((badge) => {
                            return (
                                <li key={badge.id}>
                                    {badge.firstName} {badge.lastName}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        )
    }
}

export default BadgesList;