import React, { Component } from 'react';

class WeatherInfo extends React.Component {
    render() {
        const { news, count } = this.props;
        if (this.props !== null && this.props !== undefined) {
            return(
                <div key={count}>
                    <span>
                        <a href={news.linkUrl}><img src={news.thumbnail} /></a>
                        <span>{news.title}</span>
                    </span>
                    
                </div>
            );
        }
        else {
            return;
        }
    };
}

export default WeatherInfo;