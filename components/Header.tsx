"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // Get current route

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <h1 className="text-2xl font-bold">My Website</h1>
      <nav>
        <ul className="flex gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
            { name: "Vehicles", path: "/vehicles" },
            { name: "Sponsor", path: "/sponsor" },
            { name: "Gallery", path: "/gallery" },
            { name: "Staff Only", path: "/member_access" },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className={`hover:text-gray-300 ${
                  pathname === path ? "border-b-2 border-white" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
