import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

const SideNav = ({ setAuthenticated }) => {
  return (
    <nav id="side-nav">
      <NavLink to="/" exact={true} activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/login" exact={true} activeClassName="active">
        Login
      </NavLink>

      <NavLink to="/sign-up" exact={true} activeClassName="active">
        Sign Up
      </NavLink>

      <NavLink to="/users" exact={true} activeClassName="active">
        Users
      </NavLink>

      <LogoutButton setAuthenticated={setAuthenticated} />
    </nav>
  );
};

export default SideNav;
