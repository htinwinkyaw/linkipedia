import CustomButton from "@/app/_components/ui/CustomButton";
import React from "react";
import { signInWithProvider } from "@/app/_utils/signInWithProvider";

const SignInWithProviders = () => {
  const handleFacebookSignIn = () => {
    signInWithProvider("facebook", { redirect: false });
  };

  const handleGoogleSignIn = () => {
    signInWithProvider("google", { redirect: false });
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <CustomButton
        label="Sign in with Facebook"
        onClick={handleFacebookSignIn}
        full={true}
        outline={true}
      />
      <CustomButton
        label="Sign in with Google"
        onClick={handleGoogleSignIn}
        full={true}
        outline={true}
      />
    </div>
  );
};

export default SignInWithProviders;
