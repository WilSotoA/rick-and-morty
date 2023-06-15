import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css"

export default function Error404() {
  return (
    <div className="error-container">
      <h1 className="error-title">Error 404</h1>
      <p className="error-message">Page not found</p>
      <Link to={"/home"}>
        <h1 className="error-link">Go back to Home</h1>
      </Link>
    </div>
  );
}
