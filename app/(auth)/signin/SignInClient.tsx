"use client";

import Card from "@/app/_components/wrapper/Card";
import CustomHorizontal from "@/app/_components/ui/CustomHorizontal";
import Heading from "@/app/_components/ui/Heading";
import React from "react";
import SignInForm from "./SignInForm";
import SignInLabel from "./SignInLabel";
import SignInWithProviders from "./SignInWithProviders";

const SignInClient = () => {
  return (
    <Card>
      <Heading title="Welcome back!" center={true} />
      <SignInForm />
      <CustomHorizontal />
      <SignInWithProviders />
      <SignInLabel />
    </Card>
  );
};

export default SignInClient;
