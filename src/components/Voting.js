import React from "react";
import vote from "../image/facebook-like-filled.png";

const Voting = props => {
  return (
    <div>
      <img
        src={vote}
        alt=""
        className="upvote"
        onClick={() => props.handleClick(props.index, "upvote")}
      /> {" "}
      <img
        src={vote}
        alt=""
        className="downvote"
        onClick={() => props.handleClick(props.index, "downvote")}
      />
    </div>
  );
};

export default Voting;
