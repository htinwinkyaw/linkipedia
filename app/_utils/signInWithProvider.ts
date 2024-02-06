import { SignInOptions, signIn } from "next-auth/react";

import { BuiltInProviderType } from "next-auth/providers/index";

export const signInWithProvider = (
  name: BuiltInProviderType,
  options?: SignInOptions | undefined
): void => {
  signIn(name, { ...options })
    .then((callback) => {
      if (callback?.ok) {
        console.log("Signed In.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
