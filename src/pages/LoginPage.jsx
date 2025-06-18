import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isAuthenticated, login } = useAuth();

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message || "Login failed. Please try again.");
    }
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          placeholder="Your email address"
          type="email"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Your password"
          type="password"
          value={password}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>{!isAuthenticated && <button>Log In</button>}</div>
      </form>
      <Link to="/register">
        Registered users have the ability to create new accounts for others
      </Link>
    </>
  );
}
