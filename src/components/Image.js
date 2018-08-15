import React from "react";

const Image = props => {
  return (
    <div>
      <img alt="" className="image" src={props.urlToImage} />
    </div>
  );
};

export default Image;
