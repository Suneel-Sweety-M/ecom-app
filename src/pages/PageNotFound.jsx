import React from "react";
import '../styles/pnf.css';
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pnf-container">
      <h1>404</h1>
      <h2>Page Not Found!</h2>
      <p>This page not available, Go to home page.</p>
      <Link className="btn-primary" to='/'>Go to Home Page</Link>
    </div>
  );
};

export default PageNotFound;
