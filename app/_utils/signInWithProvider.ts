import { SignInOptions, signIn } from "next-auth/react";

import { BuiltInProviderType } from "next-auth/providers/index";
import toast from "react-hot-toast";

export const signInWithProvider = (
  name: BuiltInProviderType,
  options?: SignInOptions | undefined
): void => {
  signIn(name, { ...options })
    .then((callback) => {
      if (callback?.ok) {
        toast.success("signed in.");
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("failed to sign in.");
    });
};
