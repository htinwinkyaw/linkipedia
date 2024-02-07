import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
