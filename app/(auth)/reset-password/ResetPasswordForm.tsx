"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";

import CustomButton from "@/app/_components/ui/CustomButton";
import CustomInput from "@/app/_components/ui/CustomInput";
import { validateTwoPasswords } from "@/app/_utils/validateTwoPasswords";

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { password1, password2 } = data;

    validateTwoPasswords(password1, password2);
  };

  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        id="password1"
        label="Password"
        type="password"
        register={register}
        rules={{
          required: true,
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            message: "Invalid password pattern",
          },
        }}
        errors={errors}
        placeholder="Enter new password"
      />
      <CustomInput
        id="password2"
        label="Re-enter Password"
        type="password"
        register={register}
        rules={{
          required: true,
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            message: "Invalid password pattern",
          },
        }}
        errors={errors}
        placeholder="Re-enter password"
      />
      <div className="w-full">
        <CustomButton
          label="Reset Password"
          onClick={handleSubmit(onSubmit)}
          disabled={loading}
          full
        />
      </div>
    </div>
  );
};

export default ResetPasswordForm;
