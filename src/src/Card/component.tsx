import React from "react";
import "./style.css";

interface CardProps {
  value : string
}

const Card = (props : CardProps) => {
  return (
    <div className="Card">
      {props.value}
    </div>
  );
};

export default Card;
