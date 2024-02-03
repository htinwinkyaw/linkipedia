import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
