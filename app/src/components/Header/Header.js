import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">
            <div className="scores">
                Score: {props.score} Highscore: {props.highscore}
            </div>
        </div>
    </div>
);

export default Header;