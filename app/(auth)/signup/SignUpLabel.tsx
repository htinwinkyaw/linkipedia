import Link from "next/link";
import React from "react";

const SignUpLabel = () => {
  return (
    <p className="text-sm text-center">
      Already have an account? Sign in{" "}
      <Link href="/signin" className="text-blue-400 underline">
        here
      </Link>
      .
    </p>
  );
};

export default SignUpLabel;
