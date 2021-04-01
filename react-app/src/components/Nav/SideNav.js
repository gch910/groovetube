import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

const SideNav = ({ setAuthenticated }) => {
  const sessionUser = useSelector(state => state.session.user)
  return (
    <nav id="side-nav">
      <NavLink className="nav-link" to="/" exact={true} activeClassName="active">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/login" exact={true} activeClassName="active">
        {sessionUser? sessionUser.username : "Login"}
      </NavLink>

      <NavLink className="nav-link" to="/sign-up" exact={true} activeClassName="active">
        Sign Up
      </NavLink>

      <NavLink className="nav-link" to="/users" exact={true} activeClassName="active">
        Users
      </NavLink>

      <LogoutButton setAuthenticated={setAuthenticated} />
    </nav>
  );
};

export default SideNav;
