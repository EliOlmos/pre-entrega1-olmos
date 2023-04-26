import React from "react";
import Contador from "../Contador/Contador";

export const Card = () => {
  return (
    <div className="shadow p-3 mb-5 bg-black rounded">
    <div className="card text-center bg-dark  " style={{ width: "18rem" }}>
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_812367-MLA53409014077_012023-O.webp"
        alt="raqueta"
      />
      <div className="card-body text-light">
        <h4 className="card-title">Producto</h4>
        <p className="card-text">Descripcion del producto</p>
        <div>
          <Contador />
        </div>
      </div>
    </div>
    </div>
  );
};
