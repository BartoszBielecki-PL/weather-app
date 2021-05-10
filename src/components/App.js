import React, { Component } from "react";
import "./App.sass";
import Header from "./Header";

class App extends Component {
  state = {
    showDetails: null,
  };
  getMenuInfo = (isShowInfoActive) => {
    this.setState({
      showDetails: isShowInfoActive,
    });
  };
  render() {
    return (
      <div className="app">
        <Header setMenuInfo={this.getMenuInfo} />
      </div>
    );
  }
}

export default App;
