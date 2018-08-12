import React, { Component } from "react";
import NewsFeed from "./NewsFeed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 align="center">Hacker News Reader</h1>
        <NewsFeed />
      </div>
    );
  }
}

export default App;
