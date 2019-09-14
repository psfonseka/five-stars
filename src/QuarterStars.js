import React from "react";
import "./styles.css";

function QuarterStars(props) {
    let rating = props.rating || 0;
    let stars = [];
    while (stars.length < 5) {
        if (rating > 1) {
            stars.push(1);
        } else if (rating > 0) {
            let empty = Math.abs(0 - rating);
            let quart = Math.abs(0.25 - rating);
            let half = Math.abs(0.5 - rating);
            let three = Math.abs(0.75 - rating);
            let full = Math.abs(1 - rating);
            let closest = Math.min(empty, quart, half, three, full);
            switch (closest) {
                case (empty): 
                    stars.push(0);
                    break;
                case quart: 
                    stars.push(0.28);
                    break;
                case half: 
                    stars.push(0.5);
                    break;
                case three: 
                    stars.push(0.72);
                    break;
                case full: 
                    stars.push(1.0);
                    break;
                default: 
                    console.log("OOPS");
                    stars.push(0);
                    break;
            }
        } else {
            stars.push(0);
        }
        rating = rating - 1;
    }
    return (
        <div>
            <h1>Fill Stars to Nearest Quarter</h1>
            {stars.map((item, i) => {
                return (
                    <div className="single-star-container" key={i}>
                        <div className="single-star-fill" style={{"width" : `${parseInt(item*31)}px`}}>
                            <img className="single-star-outline" src="star.png" alt="stars alt"></img>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default QuarterStars;