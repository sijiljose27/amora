import React, { useState } from "react";
import "./styles.module.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Check if username and password are valid
    if (username.trim() === "") {
      setErrorMessage("Please enter your username");
      return;
    }
    if (password.trim() === "") {
      setErrorMessage("Please enter your password");
      return;
    }
    // Perform login action
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Check if username, password and email are valid
    if (username.trim() === "") {
      setErrorMessage("Please enter a username");
      return;
    }
    if (password.trim() === "") {
      setErrorMessage("Please enter a password");
      return;
    }
    if (email.trim() === "") {
      setErrorMessage("Please enter an email address");
      return;
    }
    // Perform signup action
    console.log(`Signing up with username: ${username}, password: ${password} and email: ${email}`);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
  };

  return (
    <div className="App">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {!isLogin && (
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        )}
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <div className="toggle-mode">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={handleToggleMode}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
}
