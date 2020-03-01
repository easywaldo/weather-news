import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherService from './service/weatherService';
import WeatherList from './component/weatherList';
import { underline } from 'ansi-colors';


let newsList = new WeatherService();
//let result = newsList.getNewsList();
//console.log(result);
let newsUrlDev = "https://localhost:5001/weatherforecast/GetWeatherNews";
let newsUrlLive = "https://easywaldo-test-api.azurewebsites.net/weatherForecast/GetWeatherNews";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }
  
  componentDidMount() {
    fetch(newsUrlLive, {
          mode: 'cors',
          method: 'GET',
          credentials: 'include',
          headers: new Headers ({
                'Content-Type': 'application/json'
          })
      }).then((res) => {
          //if (res.ok === false) {
            // this.setState({
            //   isLoaded: true,
            //   items: null
            // });
            // throw new Error('Network response was not ok.');
          //}
          //else {
            return res.json();
          //}
          //resolve(res ? JSON.parse(res) : {})
      }).catch(function(error) {
          console.log('There has been a problem with your fetch operation: ', error.message);
      }).then((json) => {
          //if (json === null) return null;
          console.log(json);
          newsList = json;
          this.setState({
            isLoaded: true,
            items: newsList
          });
          return newsList;
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (isLoaded === true) {
      return (
        <WeatherList weatherList={items}/>
      );
    }
    else {
      return (
      <div className="App">
        loading...
      </div>
      );
    }
  };
}

export default App;
