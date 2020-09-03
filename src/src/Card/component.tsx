import React from "react";
import "./style.css";

export interface CardProps {
  companyName: string;
  companyCode: string;
  jobTitle: string;
  timeSincePosting: string;
  employmentType: EmploymentType;
  location: string;
  role: string;
  level: string;
  isNew: boolean | undefined;
  isFeatured: boolean | undefined;
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

  const imageSrc = require(`../assets/logos/${props.companyCode}.svg`);

  let cardClass = "Card";
  if (props.isFeatured) {
    cardClass += " card-featured";
  }

  const cardCallouts : JSX.Element[] = [];
  if (props.isNew) {
    cardCallouts.push(<div className="card-callout card-new">new!</div>);
  }
  if (props.isFeatured) {
    cardCallouts.push(<div className="card-callout card-featured">featured</div>);
  }

  return (
    <div className={cardClass}>
      <div className="left">
        <div className="company-image">
          <img src={imageSrc} alt={props.companyName} />
        </div>
        <div className="company-info">
          <div className="company-info-head">
            <div className="company-name">{props.companyName}</div>
            {cardCallouts}
          </div>
          <div className="job-title">{props.jobTitle}</div>
          <div className="details">
            <span className="time-since-posting">{props.timeSincePosting}</span>
            <span className="employment-type">{props.employmentType}</span>
            <span className="location">{props.location}</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="tags">{tagComponents}</div>
      </div>
    </div>
  );
};

export default Card;
