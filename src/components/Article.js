import React from "react";
import Image from "./Image";
import Title from "./Title";
import Voting from "./Voting";
import Details from "./Details";
import Description from "./Description";

const Article = props => {
  return (
    <div className="container">
      <div>
        <Image urlToImage={props.article.urlToImage} />
      </div>
      <div className="content">
        <Title title={props.article.title} />
        <Details
          author={props.article.author}
          publishedAt={props.article.publishedAt}
          votes={props.article.votes}
        />
        <Voting
          index={props.index}
          handleClick={(index, option) => props.handleClick(index,option)}
        />
        <Description
          description={props.article.description}
          url={props.article.url}
        />
      </div>
    </div>
  );
};

export default Article;
