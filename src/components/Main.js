import React, { Component } from "react";
import InputSearch from "./InputSearch";

class Main extends Component {
  state = {
    cityName: "",
    weatherDescription: "",
    lng: 10,
    lat: 10,
    temperature: "",
    sunrise: "",
    sunset: "",
    citySearchHistory: [],
  };

  getWeatherParameters = (cityName) => {
    const apiKey = "c4c8854fb0426dd04df7f7f0d3bab41c";
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric
    `;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cityName = data.name;
        const weatherDescription = data["weather"][0]["main"];
        const lng = data.coord.lon;
        const lat = data.coord.lat;
        const temperature = data.main.temp;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        const citySearchHistory = this.state.citySearchHistory;
        citySearchHistory.unshift(cityName);
        this.setState({
          cityName,
          weatherDescription,
          lng,
          lat,
          temperature,
          sunrise,
          sunset,
          citySearchHistory,
        });
      })
      .catch((error) => {
        alert("Enter correct City Name");
        console.log(console.log(error));
      });
  };

  render() {
    return (
      <main>
        <InputSearch
          getWeatherParameters={this.getWeatherParameters}
        ></InputSearch>
      </main>
    );
  }
}

export default Main;
