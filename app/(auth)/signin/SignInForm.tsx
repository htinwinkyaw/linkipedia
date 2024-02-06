import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";

import CustomButton from "@/app/_components/ui/CustomButton";
import CustomInput from "@/app/_components/ui/CustomInput";
import Link from "next/link";
import { signInWithProvider } from "@/app/_utils/signInWithProvider";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: { email: "", password: "" } });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    signInWithProvider("credentials", { ...data, redirect: false });
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        id="email"
        label="Email"
        placeholder="Enter your email"
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
      <CustomInput
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register}
        rules={{
          required: true,
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            message: "Invalid email address",
          },
        }}
        errors={errors}
      />
      <div>
        <Link
          href="/forget-password"
          className="text-xs hover:underline text-right"
        >
          Forget password?
        </Link>
      </div>
      <div className="w-full">
        <CustomButton label="Sign In" onClick={handleSubmit(onSubmit)} full />
      </div>
    </div>
  );
};

export default SignInForm;
