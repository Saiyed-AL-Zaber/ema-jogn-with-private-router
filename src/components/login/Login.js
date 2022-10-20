import React from "react";
import "./Login.css";
const login = () => {
  return (
    <div className="box">
      <h1 align="center">Login Form</h1>
      <form method="post">
        <div className="inputBox">
          <input type="email" name="email" autocomplete="off" required />
          <label>Email</label>
        </div>
        <div className="inputBox">
          <input type="password" name="password" autocomplete="off" required />
          <label>Password</label>
        </div>

        <input type="submit" name="login" value="Login" />
      </form>
    </div>
  );
};

export default login;
