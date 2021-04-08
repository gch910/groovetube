import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

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
          {sessionUser ? sessionUser.username : "Login"}
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
