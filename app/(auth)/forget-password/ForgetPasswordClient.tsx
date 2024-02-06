import Card from "@/app/_components/wrapper/Card";
import ForgetPasswordForm from "./ForgetPasswordForm";
import Heading from "@/app/_components/ui/Heading";
import React from "react";

const ForgetPasswordClient = () => {
  return (
    <Card>
      <Heading title="Do not worry!" />
      <ForgetPasswordForm />
    </Card>
  );
};

export default ForgetPasswordClient;
