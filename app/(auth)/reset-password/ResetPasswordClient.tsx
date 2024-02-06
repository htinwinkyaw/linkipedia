import Card from "@/app/_components/wrapper/Card";
import Heading from "@/app/_components/ui/Heading";
import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPasswordClient = () => {
  return (
    <Card>
      <Heading title="Create new password." center />
      <ResetPasswordForm />
    </Card>
  );
};

export default ResetPasswordClient;
