import React, { Component } from "react";
import "./App.sass";
import Header from "./Header";
import Main from "./Main";

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
        <Main />
      </div>
    );
  }
}

export default App;
