import React from "react";
import DetailRow from "./DetailRow";

const Details = props => {
  return (
    <div className="details">
      <DetailRow
        header="Author"
        value={props.author === null ? "Unknown" : props.author}
      />
      <DetailRow header="Published at" value={props.publishedAt} />
      <DetailRow header="Vote" value={props.votes} />
    </div>
  );
};

export default Details;
