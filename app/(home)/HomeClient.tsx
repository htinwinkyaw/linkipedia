"use client";

import { Link, User } from "@prisma/client";

import Links from "./Links";
import PhoneMockup from "../_components/PhoneMockup";
import PhoneScreen from "./PhoneScreen/PhoneScreen";
import React from "react";

interface HomeClientProps {
  user: User;
  links: Link[];
}

const HomeClient: React.FC<HomeClientProps> = ({ user, links }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Links links={links} />
      <div className="hidden lg:flex items-center justify-center">
        <PhoneMockup>
          <PhoneScreen user={user} links={links} />
        </PhoneMockup>
      </div>
    </div>
  );
};

export default HomeClient;
