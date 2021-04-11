import React from "react";
import { logoutUser } from "../../store/session";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logoutUser());
    setAuthenticated(false);
  };

  return <Button variant="contained" id="logout-button" onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
