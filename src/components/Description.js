import React from "react";

const Description = (props) => {
  return (
    <div className="description">
      <p>{props.description}</p>
      <a className="button" href={props.url}>Read More</a>
    </div>
  );
};

export default Description;
