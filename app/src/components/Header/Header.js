import React from "react";
import "./Header.css";

const Header = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row">
                <div className="title" className="col-sm">
                    <h1>Dunder Mifflin 
                        <br></br>Clicky Game</h1>
                    <br></br>
                    <p>Try to click each image without clicking one twice</p>
                </div>
                <div className="score" className="col-sm">
                    <h3>Score: {props.score}</h3>
                    <br></br>
                    <h3>Highscore: {props.highscore}</h3>
                </div>
            </div>
        </div>
    </div>
);

export default Header;