import { Link, User } from "@prisma/client";

import PhoneLinkList from "./PhoneLinkList";
import PhoneUserInfo from "./PhoneUserInfo";
import React from "react";

interface PhoneScreenProps {
  user: User;
  links: Link[];
}

const PhoneScreen: React.FC<PhoneScreenProps> = ({ user, links }) => {
  const activeLinks = links.filter((link) => link.active);

  return (
    <div className="flex flex-col items-center gap-4">
      <PhoneUserInfo user={user} />
      <PhoneLinkList links={activeLinks} />
    </div>
  );
};

export default PhoneScreen;
