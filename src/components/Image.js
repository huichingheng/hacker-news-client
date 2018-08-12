import React from "react";

const Image = props => {
  return (
    <div>
      <img alt="article" align="left" src={props.urlToImage} />
    </div>
  );
};

export default Image;
