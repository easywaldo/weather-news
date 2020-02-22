import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherService from './service/weatherService';
import WeatherList from './component/weatherList';


let newsList = new WeatherService();
let result = newsList.getNewsList();
console.log(result);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }
  
  componentDidMount() {
    fetch('https://easywaldo-test-api.azurewebsites.net/weatherForecast/GetWeatherNews', {
                mode: 'cors',
                method: 'GET',
                //credentials: 'include',
                headers: new Headers ({
                      'Content-Type': 'application/json'
                })
            }).then((res) => {
                return res.json();
                //resolve(res ? JSON.parse(res) : {})
            }).then((json) => {
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
    //return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    if (isLoaded == true) {
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
