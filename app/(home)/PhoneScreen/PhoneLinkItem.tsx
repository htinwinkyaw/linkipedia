import Link from "next/link";
import { Link as LinkModel } from "@prisma/client";
import React from "react";

interface PhoneLinkItemProps {
  link: LinkModel;
}

const PhoneLinkItem: React.FC<PhoneLinkItemProps> = ({ link }) => {
  return (
    <Link href={link.url} className="btn btn-wide" target="_blank">
      {link.title}
    </Link>
  );
};

export default PhoneLinkItem;
