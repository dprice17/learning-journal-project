import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "./image17.png";

export default function Header() {
  const activeLinkStyle = {
    textDecoration: "underline",
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logoImg} />
        <NavLink className="logo-text" to="/">
          Learning Journal
        </NavLink>
      </div>

      <nav className="header-nav-bar">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          HOME
        </NavLink>

        <NavLink
          to="blog"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          BLOG
        </NavLink>

        <NavLink
          to="aboutme"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          ABOUT ME
        </NavLink>
      </nav>
    </header>
  );
}
