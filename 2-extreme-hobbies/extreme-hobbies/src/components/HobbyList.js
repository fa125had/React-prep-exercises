import React from "react";
import Hobby from "./Hobby";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <ul className="hobby-list">
      {hobbies.map((hobby, index) => {
        return <Hobby key={index} hobby={hobby} />;
      })}
    </ul>
  );
};

export default HobbyList;
