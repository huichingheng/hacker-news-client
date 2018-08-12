import React from "react";

const DetailRow = props => {
  return (
    <div>
      <strong>{props.header}</strong>
      <span>: </span>
      <span>{props.value}</span>
    </div>
  );
};

export default DetailRow;