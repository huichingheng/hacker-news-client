import React, { Component } from "react";
// import Article from "./Article";
import { articles } from "../seedData.js";

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
        <div className="box" key={i}>
          <img src={article.urlToImage} alt={article.description} />
          <h2>{article.title}</h2>
          <h3>{article.author}</h3>
          <p>{article.description}</p>
          <p>
            <strong>Vote:</strong> {article.votes}
          </p>
          <button onClick={() => this.handleClick(i)}>vote</button>
          <p>
            <strong>Published at:</strong> {article.publishedAt}
          </p>
          <a href={article.url}>Link:</a>
        </div>
      );
    });
  }

  handleClick(index) {
    // 1. update article
    const articleToUpdate = this.state.articles[index];
    articleToUpdate.votes = articleToUpdate.votes + 1;
    // console.log(articleToUpdate);

    // 2. create new array of articles with updated article
    const updatedArray = [
      ...this.state.articles.slice(0, index),
      articleToUpdate,
      ...this.state.articles.slice(index + 1)
    ];
    
    this.setState ({
      articles: updatedArray
    })
  }
}

export default NewsFeed;