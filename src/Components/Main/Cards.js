import React from "react";
import { Card } from "./Card";
import "./Cards.css"

export const Cards = () => {
  return (
    <div >
      <div className="container d-flex justify-content-center align-items-center h-30">
        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
