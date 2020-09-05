import React from "react";
import { useLocation } from "react-router-dom";

function Nav() {

  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="nav nav-pills flex-column flex-sm-row text-center shadow bg-light">
        <li className="nav-item flex-sm-fill text-light bg-dark navbar-text">
          Shane Koehler
        </li>
        <li className="nav-item flex-sm-fill">
          <a className={"nav-link rounded-0" + (pathname === "/" && " active")}
            id="p_about" href="/">About</a>
        </li>
        <li className="nav-item flex-sm-fill">
          <a className={"nav-link rounded-0" + (pathname === "/portfolio" && " active")}
            id="p_portfolio" href="/portfolio">Portfolio</a>
        </li>
        <li className="nav-item flex-sm-fill">
          <a className={"nav-link rounded-0"  + (pathname === "/contact" && " active")}
            id="p_contact" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
