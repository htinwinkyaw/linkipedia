"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface NavUserProps {
  user: User | null;
}

const NavUser: React.FC<NavUserProps> = ({ user }) => {
  const router = useRouter();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10">
          <Image
            alt="User Image"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            className="rounded-full"
            fill
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        {!user && (
          <>
            <li>
              <Link href="/signin" className="justify-between">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            {/* <Link href="/signup">Sign Out</Link> */}
            <button
              onClick={() => {
                signOut()
                  .then(() => {
                    router.push("/signin");
                    toast.success("signed out.");
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.error("failed to sign out.");
                  });
              }}
            >
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavUser;
