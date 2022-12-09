import React from "react";
import "../css/card.css";

const Card = (props) => {
        return (
            <article className="card">
                <footer className="card__footer">
                    <img className="card__img" src={`https://robohash.org/${props.robot.id}`} alt={`robot ${props.robot.name}`}/>
                    <h2>{props.robot.name}</h2>
                    <p>{props.robot.email}</p>
                </footer>
            </article>
        );
}

export default Card;