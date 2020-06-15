import React from "react";
import "./style.css";
import Card from "../Card/component";
import { EmploymentType } from "../Card/component";

const JobListing = () => {
  const cardsContent = [
    {
      companyName: "Photosnap",
      jobTitle: "Senior Frontend Developer",
      timeSincePosting: "1d ago",
      employmentType: EmploymentType.FullTime,
      location: "USA only",
    },
    {
      companyName: "Manage",
      jobTitle: "Fullstack Developer",
      timeSincePosting: "1d ago",
      employmentType: EmploymentType.PartTime,
      location: "Remote",
    },
    {
      companyName: "Account",
      jobTitle: "Junior Frontend Developer",
      timeSincePosting: "2d ago",
      employmentType: EmploymentType.PartTime,
      location: "USA only",
    },
  ];

  const cards = cardsContent.map((cardContent) => (
    <Card
      companyName={cardContent.companyName}
      jobTitle={cardContent.jobTitle}
      timeSincePosting={cardContent.timeSincePosting}
      employmentType={cardContent.employmentType}
      location={cardContent.location}
    />
  ));

  return <div className="JobListing">{cards}</div>;
};

export default JobListing;
