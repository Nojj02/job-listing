import React from "react";
import "./style.css";
import Card from "../Card/component";

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
    <Card value={cardContent.value}></Card>
  ));

  return (
    <div className="JobListing">
      {cards}
    </div>
  );
};

export default JobListing;
