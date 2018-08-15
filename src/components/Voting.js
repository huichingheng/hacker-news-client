import React from "react";
import downvote from "../image/downVote.png";
import upvote from "../image/upVote.png";

const Voting = props => {
  return (
    <div>
      <img
        src={upvote}
        alt="upvote"
        className="upvote"
        onClick={() => props.handleClick(props.index, "upvote")}
      /> {" "}
      <img
        src={downvote}
        alt="downvote"
        className="downvote"
        onClick={() => props.handleClick(props.index, "downvote")}
      />
    </div>
  );
};

export default Voting;
