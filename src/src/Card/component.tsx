import React from "react";
import "./style.css";

export interface CardProps {
  companyName: string;
  jobTitle: string;
  timeSincePosting: string;
  employmentType: EmploymentType;
  location: string;
}

export enum EmploymentType {
  FullTime = "Full Time",
  PartTime = "Part Time",
  Contractual = "Contractual"
}

const Card = (props: CardProps) => {
  return (
    <div className="Card">
      <div className="company-name">{props.companyName}</div>
      <div className="job-title">{props.jobTitle}</div>
      <div className="details">
        <span className="time-since-posting">{props.timeSincePosting}</span>
        <span className="employment-type">{props.employmentType}</span>
        <span className="location">{props.location}</span>
      </div>
    </div>
  );
};

export default Card;
