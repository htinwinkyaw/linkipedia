import React from "react";
import { User } from "@prisma/client";

interface PhoneUserInfoProps {
  user: User;
}

const PhoneUserInfo: React.FC<PhoneUserInfoProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
};

export default PhoneUserInfo;
