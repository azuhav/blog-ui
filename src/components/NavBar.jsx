import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faHome, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "./AuthContext";
import SearchForm from "./SearchForm";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "navbar-sticky" : ""}`}>
      <ul>
        <li>
          <Link className="area" to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        </li>
        <li>
          <div className="tagline-frame">
            <span className="tagline">
              <span className="tagline-emphasis">Exploring</span>{" "}
              <span className="tagline-emphasis">Software</span>,{" "}
              <span className="tagline-emphasis">QA</span>,{" "}
              <span className="tagline-emphasis">Networking</span>,{" "}
              <span className="tagline-emphasis">Electronics</span>
            </span>
          </div>
        </li>
        <li>
          <Link className="area" to="/about">
            About
          </Link>
        </li>
        <li>
          <SearchForm />
        </li>
        <li>
          <Link
            className="area"
            to={isAuthenticated ? "/posts/create" : "#"}
            style={{
              color: isAuthenticated ? "inherit" : "gray",
              pointerEvents: isAuthenticated ? "auto" : "none",
            }}
          >
            <FontAwesomeIcon icon={faFileAlt} size="lg" />
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <Link className="area" to="#" onClick={logout}>
              Log Out
            </Link>
          ) : (
            <Link className="area" to="/login">
              Log In
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
