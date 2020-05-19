import React from "react";
import "./style.css";

const JobListing = () => {
  const cardsContent = [
    { value: "A" },
    { value: "B" },
    { value: "C" },
    { value: "D" },
    { value: "E" },
    { value: "F" },
    { value: "G" },
  ];

  const cards = cardsContent.map((cardContent) => (
    <div className="card">{cardContent.value}</div>
  ));

  return (
    <div className="JobListing">
      {cards}
    </div>
  );
};

export default JobListing;
