"use client";

import React, { useState } from "react";

import { Link } from "@prisma/client";
import LinkForm from "../LinkForm";
import LinkItemCard from "./LinkItemCard";
import { toggleState } from "@/app/_utils/toggleState";

interface LinkItemProps {
  link: Link;
}

const LinkItem: React.FC<LinkItemProps> = ({ link }) => {
  const [editing, setEditing] = useState(false);

  const handleLinkFormDisplay = () => {
    toggleState(editing, setEditing);
  };

  return editing ? (
    <LinkForm link={link} onCancel={handleLinkFormDisplay} />
  ) : (
    <LinkItemCard link={link} setEditing={setEditing} />
  );
};

export default LinkItem;
