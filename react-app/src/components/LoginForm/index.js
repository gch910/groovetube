import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory, Link } from "react-router-dom";
import { loginUser } from "../../store/session";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./LoginForm.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(3),
        width: "30ch",
      },
    },
  }));

  const classes = useStyles();

  const onLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(email, password)).then((res) => {
      if (res?.errors) {
        setFormErrors(res.errors);
        return res.errors;
      } else {
        setAuthenticated(true);
        return history.push("/");
      }
    });
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUser("demo@aa.io", "password")).then((res) => {
      if (res?.errors) {
        setFormErrors(res.errors);
        return res.errors;
      } else {
        setAuthenticated(true);
        return history.push("/");
      }
    });
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form id="login-form" className={classes.root} onSubmit={onLogin}>
      <h1 id="login-h1">Login</h1>
      <div id="login-errors">
        {formErrors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <TextField
          className="login-field"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          label="Username"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className="login-field"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          label="Password"
          variant="outlined"
        />
        <div id="login-button-div">
          <Link to="/sign-up" id="signup-link">
            Don't have an account? Sign up!
          </Link>
          <div id="login-demo-div">
            <Button variant="contained" id="login-button" type="submit">
              Login
            </Button>
            <Button variant="contained" id="login-button" type="button" onClick={demoLogin}>
              Demo
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
