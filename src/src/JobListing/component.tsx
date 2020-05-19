import React from "react";
import "./style.css";
import Card from "../Card/component";

const JobListing = () => {
  const cardsContent = [
    { companyName: "Photosnap", jobTitle: "Senior Frontend Developer" },
    { companyName: "Manage", jobTitle: "Fullstack Developer" },
    { companyName: "Account", jobTitle: "Junior Frontend Developer" },
  ];

  const cards = cardsContent.map((cardContent) => (
    <Card companyName={cardContent.companyName}
      jobTitle={cardContent.jobTitle}
    />
  ));

  return (
    <div className="JobListing">
      {cards}
    </div>
  );
};

export default JobListing;
