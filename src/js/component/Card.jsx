import React from "react";
import "./cardStyles.css";

const Card = () => {
    return (
        <div className="Card">
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="Card-img-top" alt="..." />
                <div className="Card-body">
                    <h5 className="Card-title">Card title</h5>
                    <p className="Card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
