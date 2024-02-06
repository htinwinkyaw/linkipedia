import Link from "next/link";
import React from "react";

const SignInLabel = () => {
  return (
    <p className="text-sm text-center">
      New user? Register{" "}
      <Link href="/signup" className="text-blue-400 underline">
        here
      </Link>
      .
    </p>
  );
};

export default SignInLabel;
