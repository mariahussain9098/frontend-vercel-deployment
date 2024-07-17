import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { login } from "../../api/api"

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await login(credentials);
    if (data.token) {
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/create-blog");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
