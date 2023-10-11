import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <footer>
      <NavLink to="/" className="footer-title" onClick={scrollToTop}>
        My Learning Journal
      </NavLink>
      <p className="footer-copyright-text">Copyright ©2022</p>
    </footer>
  );
}
