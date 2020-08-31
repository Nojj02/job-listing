import React from "react";
import "./style.css";
import Card from "../Card/component";
import { EmploymentType } from "../Card/component";

import * as CardsContent from "../testData.json";

const JobListing = () => {
  const cards = CardsContent.jobs.map((cardContent) => (
    <Card
      companyName={cardContent.companyName}
      companyCode={cardContent.companyCode}
      jobTitle={cardContent.jobTitle}
      timeSincePosting={cardContent.timeSincePosting}
      employmentType={
        EmploymentType[
          cardContent.employmentType as keyof typeof EmploymentType
        ]
      }
      location={cardContent.location}
      role={cardContent.role}
      level={cardContent.level}
      languages={cardContent.languages}
      tools={cardContent.tools}
      isFeatured={cardContent.isFeatured}
      isNew={cardContent.isNew}
    />
  ));

  return <div className="JobListing">{cards}</div>;
};

export default JobListing;
