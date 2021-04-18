import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { signUp } from "../services/auth";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./SignupForm.css"

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [image, setImage] = useState("");

  const updateImage = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setImage(file);
  
  };


  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '30ch',
      },
    },
  }));

  const classes = useStyles();

  const onSignUp = async (e) => {
    e.preventDefault();
    // const img_path = new FormData();
    // img_path.append("image", image);

    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form id="signup-form" className={classes.root} onSubmit={onSignUp}>
      <h1 id="signup-h1">Sign Up</h1>
      <div>
        <TextField
          className="signup-field"
          type="text"
          name="username"
          placeholder="Username"
          onChange={updateUsername}
          value={username}
          variant="outlined"
          label="Username"
        ></TextField>
      </div>
      <div>
        <TextField
          className="signup-field"
          type="text"
          name="email"
          placeholder="Email"
          onChange={updateEmail}
          value={email}
          variant="outlined"
          label="Email"
        ></TextField>
      </div>
      <div>
        <TextField
          className="signup-field"
          type="password"
          name="password"
          placeholder="Password"
          onChange={updatePassword}
          value={password}
          variant="outlined"
          label="Password"
        ></TextField>
      </div>
      <div>
        <TextField
          className="signup-field"
          type="password"
          name="repeat_password"
          placeholder="Confirm Password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          variant="outlined"
          label="Confirm Password"
        ></TextField>
      </div>
      {/* <label className="upload-label">Upload an image</label>
            <input
              name="image"
              className="upload-field"
              type="file"
              // accept="image/*"
              onChange={updateImage}
            /> */}
      <div id="signup-button-div">
        <Link to="/login" id="login-link">Already have an account? Login!</Link>
        <Button variant="contained" id="signup-button" type="submit">Sign Up</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
