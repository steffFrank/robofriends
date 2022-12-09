import React from "react";
import Card from "./Card";
import "../css/cards.css";

const Cards = (props) => {
        return (
            <section className="robots">
                {props.robots.map(robot => {
                    return <Card key={robot.id} robot={robot} />
                })}
            </section>
            
        );
}

export default Cards;