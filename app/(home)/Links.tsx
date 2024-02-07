import { Link } from "@prisma/client";
import LinkList from "./LinkList";
import NewLink from "./NewLink";
import React from "react";

interface LinksProps {
  links: Link[];
}

const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <div className="flex flex-col gap-5">
      <NewLink />
      {links && links.length > 0 && <LinkList links={links} />}
    </div>
  );
};

export default Links;
