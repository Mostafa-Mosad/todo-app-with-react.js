import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height={100} />
        </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/addTodo">
               <FontAwesomeIcon icon={faPlus} /><strong>NEW</strong>
              </NavLink>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
