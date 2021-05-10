import React, { Component } from "react";
import "./Header.sass";
import { HiOutlineMenu } from "react-icons/hi";

class Header extends Component {
  state = {
    active: false,
  };
  handleMenuClick = (props) => {
    this.setState({
      active: !this.state.active,
    });
    this.props.setMenuInfo(this.state.active);
  };
  render() {
    return (
      <header>
        <div className="menu" onClick={this.handleMenuClick}>
          <HiOutlineMenu />
        </div>
        <h2>check the weather in your city!</h2>
      </header>
    );
  }
}

export default Header;
