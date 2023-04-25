import React from "react";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container d-flex justify-content-center align-items-center my-4">
        <div className="container d-flex justify-content-center py-5">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#a6be06" }}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#a6be06" }}
          >
            <i className="fab fa-youtube"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#a6be06" }}
          >
            <i className="fab fa-instagram"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
