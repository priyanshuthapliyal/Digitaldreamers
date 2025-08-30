import { Link } from "react-router-dom";
import React, { useState } from "react";

const links = [
  { to: "/about", label: "About", isPage: true }, // page route
  { to: "#services", label: "Services" },
  { to: "#portfolio", label: "Portfolio" },
  { to: "#team", label: "Team" },
  { to: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-2xl bg-white/90 backdrop-blur border border-gray-200 shadow-sm px-4 py-3">
          <a href="/" className="text-xl font-bold text-gray-900">
            <span className="text-[#f73002]">My</span>DigitalDreamers
          </a>

          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.to}>
                {l.isPage ? (
                  <Link
                    to={l.to}
                    className="text-gray-700 hover:text-[#f73002] transition"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.to}
                    className="text-gray-700 hover:text-[#f73002] transition"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
