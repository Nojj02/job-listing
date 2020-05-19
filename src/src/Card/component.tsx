import React from "react";
import "./style.css";

interface CardProps {
  companyName: string;
  jobTitle: string;  
}

const Card = (props: CardProps) => {
  return (
    <div className="Card">
      <div className="company-name">{props.companyName}</div>
      <div className="job-title">{props.jobTitle}</div>
    </div>
  );
};

export default Card;
