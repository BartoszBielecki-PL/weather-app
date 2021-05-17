import React, { Component } from "react";

class InputSearch extends Component {
  state = {
    cityName: "",
  };

  handleCityNameChange = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  handleCityWeatherInfo = (e) => {
    e.preventDefault();
    const { cityName } = this.state;
    if (cityName) {
      this.props.getWeatherParameters(cityName);
      this.setState({
        cityName: "",
      });
    } else {
      alert("Enter correct City Name!");
    }
  };

  render() {
    const { cityName } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Enter City Name"
          value={cityName}
          onChange={this.handleCityNameChange}
        />
        <button onClick={this.handleCityWeatherInfo}>Check!</button>
      </form>
    );
  }
}

export default InputSearch;
