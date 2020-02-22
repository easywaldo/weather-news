import React, { Component } from 'react';
import WeatherInfo from './weatherInfo';

class WeatherList extends React.Component {
    render() {
        if (this.props === undefined || this.props === null) {
            return;
        }
        const weatherList = this.props.weatherList;
        const newsList = weatherList.map(
            (item, count) => (
                <WeatherInfo key={count} news={item} />
            ));
        return(
            <div>
                {newsList}
            </div>
        );
    }
}

export default WeatherList;