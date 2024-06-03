import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../style/Form.css";
import { LoadingIndicator } from "../components/LoadingIndicator";

const Form = ({ route, method }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/home");
      } else {
        navigate("/");
      }
    } catch (error) {
      // Display error message (400 Bad Request)
      if (error.response && error.response.status === 400) {
        alert("400 Bad Request: Invalid username or password");
      } else {
        alert("Create you a account to login!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRedirectRegister = () => {
    window.location.href = "/register";
  };
  const handleRedirectLogin = () => {
    window.location.href = "/";
  };

  return (
    <div>
      {name === "Login" && (
        <div className="nav">
          <span className="log-name">Don't have a account?</span>
          <button
            className="register-button"
            type="submit"
            onClick={handleRedirectRegister}
          >
            Register
          </button>
        </div>
      )}
      {name === "Register" && (
        <div className="nav">
          <span className="reg-name">Have a account?</span>
          <button
            className="register-button"
            type="submit"
            onClick={handleRedirectLogin}
          >
            Login
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {loading && <LoadingIndicator />}
        <button className="form-button" type="submit">
          {name}
        </button>
      </form>
    </div>
  );
};

export default Form;
