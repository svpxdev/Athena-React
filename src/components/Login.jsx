import React from "react";
import "./Login.css";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login__page">
      <div className="login__brand">
        <LocalLibraryIcon className="login__brandIcon" /> <p>Athena</p>
      </div>
      <div className="login__box">
        <p className="login__header"> Sign In </p>
        <div className="login__boxInfo">
          <div className="login__boxElements">
            <label>Email </label>
            <input type="email" className="login__inputOptions" />
          </div>
          <div className="login__boxElements">
            <label>Password </label>
            <input type="password" className="login__inputOptions" />
          </div>
          <div>
            <Link to="/">
              <button className="login__button"> Sign In </button>
            </Link>
            <p className="login__disclaimer">
              By registering, you agree to our general terms and conditions .{" "}
            </p>
          </div>
        </div>
        <div className="login__new">
          <hr className="login__divider" />
          <p className="login__signUp"> New to Athena? Sign Up! </p>
          <Link to="/">
            <button className="login__button"> Sign Up </button>{" "}
          </Link>
        </div>
      </div>
      <div className="login__footer">
        <p>Copyright 2020, Athena GmbH </p>
      </div>
    </div>
  );
}

export default Login;
