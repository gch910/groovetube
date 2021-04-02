import React from "react";
import { logoutUser } from "../../store/session";
import { useDispatch } from "react-redux"

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logoutUser());
    setAuthenticated(false);
  };

  return <button id="logout-button" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
