import Card from "@/app/_components/wrapper/Card";
import CustomHorizontal from "@/app/_components/ui/CustomHorizontal";
import { Link } from "@prisma/client";
import LinkItemActiveControl from "./LinkItemActiveControl";
import LinkItemControls from "./LinkItemControls";
import React from "react";

interface LinkItemCardProps {
  link: Link;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinkItemCard: React.FC<LinkItemCardProps> = ({ link, setEditing }) => {
  return (
    <Card full>
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-bold">{link.title}</h1>
          <p>{link.url}</p>
        </div>
        <LinkItemActiveControl link={link} />
      </div>
      <CustomHorizontal />
      <LinkItemControls link={link} setEditing={setEditing} />
    </Card>
  );
};

export default LinkItemCard;
