"use client";

import Card from "@/app/_components/wrapper/Card";
import CustomHorizontal from "@/app/_components/ui/CustomHorizontal";
import Heading from "@/app/_components/ui/Heading";
import React from "react";
import SignInWithProviders from "../signin/SignInWithProviders";
import SignUpForm from "./SignUpForm";
import SignUpLabel from "./SignUpLabel";

const SignUpClient = () => {
  return (
    <Card>
      <Heading title="Welcome!" center />
      <SignUpForm />
      <CustomHorizontal />
      <SignInWithProviders />
      <SignUpLabel />
    </Card>
  );
};

export default SignUpClient;
