import { Link } from "@prisma/client";
import PhoneLinkItem from "./PhoneLinkItem";
import React from "react";

interface PhoneLinkListProps {
  links: Link[];
}

const PhoneLinkList: React.FC<PhoneLinkListProps> = ({ links }) => {
  return (
    <div className="flex flex-col gap-2">
      {links.map((link, i) => {
        return <PhoneLinkItem key={i} link={link} />;
      })}
    </div>
  );
};

export default PhoneLinkList;
