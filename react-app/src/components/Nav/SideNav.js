import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import "./NavBar.css";

const SideNav = ({ setAuthenticated }) => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
      <nav id="side-nav">
        <NavLink
          className="nav-link"
          to="/"
          exact={true}
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          to={sessionUser ? `/newvideo/upload` : "/login"}
          exact={true}
          activeClassName="active"
        >
          Upload
        </NavLink>
        <NavLink
          className="nav-link"
          to={sessionUser ? `/users/${sessionUser.id}` : "/login"}
          exact={true}
          activeClassName="active"
        >
          {sessionUser ? "My Profile" : "Login"}
        </NavLink>

        <NavLink
          className="nav-link"
          to={sessionUser ? "/videos" : "/sign-up" }
          exact={true}
          activeClassName="active"
        >
          {sessionUser ? "All Videos" : "Sign Up"}
        </NavLink>
        <NavLink
          className="nav-link"
          to={"/categories"}
          exact={true}
          activeClassName="active"
        >
          {"Categories"}
        </NavLink>

        <NavLink
          className="nav-link" 
          to="/users"
          exact={true}
          activeClassName="active"
        >
          Users
        </NavLink>

        { sessionUser ? <LogoutButton setAuthenticated={setAuthenticated} /> : "" }
      </nav>
  );
};

export default SideNav;
