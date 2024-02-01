import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavUser = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10">
          <Image
            alt="Tailwind CSS Navbar component"
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
        <li>
          <Link href="/" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link href="/">Settings</Link>
        </li>
        <li>
          <Link href="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavUser;
