import React from "react";
import "./style.css";

export interface CardProps {
  companyName: string;
  jobTitle: string;
  timeSincePosting: string;
  employmentType: EmploymentType;
  location: string;
  role: string;
  level: string;
  languages: string[] | undefined;
  tools: string[] | undefined;
}

export enum EmploymentType {
  FullTime = "Full Time",
  PartTime = "Part Time",
  Contractual = "Contractual",
}

const Card = (props: CardProps) => {
  const tags: string[] = [];
  tags.push(props.role);
  tags.push(props.level);
  tags.push(...(props.languages || []));
  tags.push(...(props.tools || []));
  const tagComponents = [];
  for (const tag of tags) {
    tagComponents.push(<div className="tag">{tag}</div>);
  }

  return (
    <div className="Card">
      <div className="left">
        <div className="company-name">{props.companyName}</div>
        <div className="job-title">{props.jobTitle}</div>
        <div className="details">
          <span className="time-since-posting">{props.timeSincePosting}</span>
          <span className="employment-type">{props.employmentType}</span>
          <span className="location">{props.location}</span>
        </div>
      </div>
      <div className="right">
        <div className="tags">{tagComponents}</div>
      </div>
    </div>
  );
};

export default Card;
