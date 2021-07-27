import React from 'react';
import { Link } from 'react-router-dom';

const NavigationHeader = () => {
  return (
    <div className="w-100 bg-white rounded-bottom py-2">
      <div className="container">
        <div className="row align-items-center">
          <h2 className="col text-primary fw-bold">Telkom Test</h2>
          <div className="col text-end">
            <Link className="text-decoration-none fw-bold me-5" to="/">
              Home
            </Link>
            <Link
              className="text-decoration-none fw-bold"
              to="/add-dashboard-widget"
            >
              Add Widget (Chart)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
