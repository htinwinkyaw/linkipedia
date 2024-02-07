import React from "react";

interface CardProps {
  children: React.ReactNode;
  custom?: string;
  full?: boolean;
}

const Card: React.FC<CardProps> = ({ children, custom, full }) => {
  return (
    <div
      className={`card w-96 bg-base-100 shadow-xl mx-auto 
        ${full ? "w-full" : "w-96"} ${custom}`}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
