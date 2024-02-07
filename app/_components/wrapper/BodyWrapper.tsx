"use client";

import LoadingIndicator from "../ui/LoadingIndicator";
import React from "react";

interface BodyWrapperProps {
  children: React.ReactNode;
}

const BodyWrapper: React.FC<BodyWrapperProps> = ({ children }) => {
  return (
    <div>
      <LoadingIndicator />
      {children}
    </div>
  );
};

export default BodyWrapper;
