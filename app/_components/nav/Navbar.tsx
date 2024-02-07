import Link from "next/link";
import NavItems from "./NavItems";
import NavUser from "./NavUser";
import React from "react";
import ThemeController from "./ThemeController";
import userServices from "@/app/_services/userServices";

const Navbar = async () => {
  const currentUser = await userServices.getCurrentUser();

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          linkipedia
        </Link>
      </div>
      <div className="flex gap-4">
        <div>
          <NavItems />
        </div>
        <div>
          <ThemeController />
        </div>
        <div>
          <NavUser user={currentUser} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
