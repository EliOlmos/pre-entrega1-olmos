import React from "react";

export const ItemListContainer = (props) => {
  return (
    <div className="alert alert-secondary alert-dismissible fade show  d-flex justify-content-center align-items-center" role="alert">
  <strong>{props.greeting}!  </strong>
</div>
  );
};
