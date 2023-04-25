import React from "react";

export const ItemListContainer = (props) => {
  return (
    <div className="alert alert-secondary alert-dismissible fade show" role="alert">
  <strong>{props.greeting}!  </strong>
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  );
};
