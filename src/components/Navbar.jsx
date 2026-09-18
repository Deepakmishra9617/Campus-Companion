import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Bot } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Admissions", "/admissions"],
  ["Placements", "/placements"],
  ["Contact", "/contact"],
];

export default function Navbar({ onAskAI }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">

        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">T</span>

          <span>
            <b>TIT</b>
            <small>Technocrats Institute of Technology</small>
          </span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${open ? "show" : ""}`}>

          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <a
            href="/#departments"
            onClick={() => setOpen(false)}
          >
            Departments
          </a>

          <a
            href="/#campus"
            onClick={() => setOpen(false)}
          >
            Campus Life
          </a>

          <a
            href="/#events"
            onClick={() => setOpen(false)}
          >
            Events
          </a>

          {/* BOT BUTTON */}
          <button
            className="ai-nav-btn"
            onClick={() => {
              setOpen(false);
              onAskAI();
            }}
          >
            <Bot size={17} />
            Ask Campus Companion
          </button>

        </div>
      </nav>
    </header>
  );
}