"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";

import CustomButton from "@/app/_components/ui/CustomButton";
import CustomInput from "@/app/_components/ui/CustomInput";

const ForgetPasswordForm = () => {
  const [loading, useLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        id="email"
        label="Email"
        placeholder="Enter your forgetting email"
        register={register}
        errors={errors}
        rules={{
          required: true,
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Invalid email address",
          },
        }}
      />
      <div>
        <CustomButton
          label="Send"
          onClick={handleSubmit(onSubmit)}
          disabled={loading}
          full
        />
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
