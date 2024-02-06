"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";

import CustomButton from "@/app/_components/ui/CustomButton";
import CustomInput from "@/app/_components/ui/CustomInput";
import axios from "axios";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/auth/signup", data)
      .then((user) => {
        console.log(user);
        console.log("Registered.");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        id="name"
        label="Name"
        register={register}
        rules={{ required: true }}
        errors={errors}
        placeholder="Enter your name"
      />
      <CustomInput
        id="email"
        label="Email"
        register={register}
        rules={{
          required: true,
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Invalid email address.",
          },
        }}
        errors={errors}
        placeholder="Enter your email"
      />
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
          label="Sign Up"
          onClick={handleSubmit(onSubmit)}
          disabled={loading}
          full
        />
      </div>
    </div>
  );
};

export default SignUpForm;
