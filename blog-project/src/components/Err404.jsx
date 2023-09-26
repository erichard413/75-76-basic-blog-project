import React from "react";
import { Link } from "react-router-dom";

export function Err404({ error }) {
  console.log(error);
  return (
    <div className="container">
      <h1 className="page-title">404 - Page Not Found</h1>
      <span className="page-subtitle">
        The page you requested cannot be found. Please go back{" "}
        <Link to="/">Home</Link>.
        {process.env.NODE_ENV == "development" && (
          <div>
            <h4>-----ERROR INFO-----</h4>
            <div>
              <p>Name: {error.name}</p>
              <p>Message: {error.message}</p>

              <p>Code: {error.code}</p>
              <p>URL: {error.config.url}</p>
            </div>
          </div>
        )}
      </span>
    </div>
  );
}
