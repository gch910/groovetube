import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { loginUser } from "../../store/session";
import "./LoginForm.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

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

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // if (authenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <form id="login-form" onSubmit={onLogin}>
      <h1>Login</h1>
      <div>
        {formErrors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <input
          className="login-field"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <input
          className="login-field"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <div id="login-button-div">
          <button id="login-button" type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
