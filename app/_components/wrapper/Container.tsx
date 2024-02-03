import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1150px] mx-auto px-3 py-5 ">{children}</div>;
};

export default Container;
