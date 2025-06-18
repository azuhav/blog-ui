import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateAccountPage() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  async function createAccount(event) {
    event.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }
    if (username.length < 5) {
      setError("Username is too short!");
      return;
    }
    if (!email.includes("@")) {
      setError("Invalid email format!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "/api/register",
        { username, email, password },
        { withCredentials: true }
      );

      if (response.status === 201) {
        setIsRegistered(true);
        navigate("/");
      } else {
        throw new Error("Failed to create account");
      }
    } catch (e) {
      setError(
        e.response?.data?.message || e.message || "An unknown error occurred"
      );
    }
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={createAccount}>
        <input
          placeholder="Your name"
          type="text"
          value={username}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          placeholder="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div>{!isRegistered && <button>Create Account</button>}</div>
      </form>
      <div>
        <Link to="/login">Already have an account? Click to Log In</Link>
      </div>
    </>
  );
}
