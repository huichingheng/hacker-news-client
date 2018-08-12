import React, { Component } from "react";
import { articles } from "../seedData.js";
import Article from "./Article";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    };
  }

  render() {
    return this.state.articles.map((article, i) => {
      return (
        <Article
          key={i}
          article={article}
          index={i}
          handleClick={(index, option) => this.handleClick(index, option)}
        />
      );
    });
  }

  handleClick(index, option) {
    const articleToUpdate = this.state.articles;
    if (option === "upvote") articleToUpdate[index].votes++;
    else if (option === "downvote") articleToUpdate[index].votes--;

    this.setState({ articles: articleToUpdate });
  }
}

export default NewsFeed;
