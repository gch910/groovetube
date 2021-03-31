import React from "react";
import { NavLink } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import "./NavBar.css";

const Nav = ({ setAuthenticated }) => {
  return (
    <>
      <TopNav />
      <SideNav setAuthenticated={setAuthenticated}/>
    </>
  );
};

export default Nav;
