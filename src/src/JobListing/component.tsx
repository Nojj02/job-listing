import React from "react";
import "./style.css";
import Card from "../Card/component";
import { EmploymentType } from "../Card/component";

const JobListing = () => {
  const cardsContent = [
    {
      companyName: "Photosnap",
      companyCode: "photosnap",
      jobTitle: "Senior Frontend Developer",
      timeSincePosting: "1d ago",
      employmentType: EmploymentType.FullTime,
      location: "USA only",
      role: "Frontend",
      level: "Senior",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      companyName: "Manage",
      companyCode: "manage",
      jobTitle: "Fullstack Developer",
      timeSincePosting: "1d ago",
      employmentType: EmploymentType.PartTime,
      location: "Remote",
      role: "Fullstack",
      level: "Midweight",
      languages: ["Python"],
      tools: ["React"],
    },
    {
      companyName: "Account",
      companyCode: "account",
      jobTitle: "Junior Frontend Developer",
      timeSincePosting: "2d ago",
      employmentType: EmploymentType.PartTime,
      location: "USA only",
      role: "Frontend",
      level: "Senior",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
    {
      companyName: "MyHome",
      companyCode: "myhome",
      jobTitle: "Junior Frontend Developer",
      timeSincePosting: "5d ago",
      employmentType: EmploymentType.Contractual,
      location: "USA only",
      role: "Frontend",
      level: "Junior",
      languages: ["CSS", "JavaScript"],
    },
    {
      companyName: "Loop Studios",
      companyCode: "loop-studios",
      jobTitle: "Software Engineer",
      timeSincePosting: "1w ago",
      employmentType: EmploymentType.FullTime,
      location: "Worldwide",
      role: "Fullstack",
      level: "Midweight",
      languages: ["JavaScript", "Ruby"],
      tools: ["Sass"],
    },
    {
      companyName: "FaceIt",
      companyCode: "faceit",
      jobTitle: "Junior Backend Developer",
      timeSincePosting: "2w ago",
      employmentType: EmploymentType.FullTime,
      location: "UK only",
      role: "Backend",
      level: "Junior",
      languages: ["Ruby"],
      tools: ["RoR"],
    },
    {
      companyName: "Shortly",
      companyCode: "shortly",
      jobTitle: "Junior Developer",
      timeSincePosting: "2w ago",
      employmentType: EmploymentType.FullTime,
      location: "Worldwide",
      role: "Frontend",
      level: "Junior",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"],
    },
    {
      companyName: "Insure",
      companyCode: "insure",
      jobTitle: "Junior Frontend Developer",
      timeSincePosting: "2w ago",
      employmentType: EmploymentType.FullTime,
      location: "USA only",
      role: "Backend",
      level: "Junior",
      languages: ["JavaScript"],
      tools: ["Vue", "Sass"],
    },
    {
      companyName: "Eyecam Co.",
      companyCode: "eyecam-co",
      jobTitle: "Full Stack Engineer",
      timeSincePosting: "3w ago",
      employmentType: EmploymentType.FullTime,
      location: "Worldwide",
      role: "Fullstack",
      level: "Midweight",
      languages: ["JavaScript", "Python"],
      tools: ["Django"],
    },
    {
      companyName: "The Air Filter Company",
      companyCode: "the-air-filter-company",
      jobTitle: "Front-end Dev",
      timeSincePosting: "1mo ago",
      employmentType: EmploymentType.PartTime,
      location: "Worldwide",
      role: "Frontend",
      level: "Junior",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
  ];

  const cards = cardsContent.map((cardContent) => (
    <Card
      companyName={cardContent.companyName}
      companyCode={cardContent.companyCode}
      jobTitle={cardContent.jobTitle}
      timeSincePosting={cardContent.timeSincePosting}
      employmentType={cardContent.employmentType}
      location={cardContent.location}
      role={cardContent.role}
      level={cardContent.level}
      languages={cardContent.languages}
      tools={cardContent.tools}
    />
  ));

  return <div className="JobListing">{cards}</div>;
};

export default JobListing;
