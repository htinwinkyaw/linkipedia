import { Link } from "@prisma/client";
import LinkItem from "./LinkItem/LinkItem";
import React from "react";

interface LinkListProps {
  links: Link[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return links.map((link, i) => {
    return <LinkItem key={i} link={link} />;
  });
};

export default LinkList;
