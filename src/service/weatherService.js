import { wait } from "@testing-library/dom";

let newsList = [
    {
        "id": 1,
        "title": "test"
    }
];

class WeatherService {
    constructor() {

    };

    getNewsList = () => {

        fetch('https://localhost:5001/weatherforecast/GetWeatherNews', {
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
                return newsList;
            });
        return newsList;
    };

    testSample = () => {
        //await wait(1000);
        return "helloworld";
    };
}

export default WeatherService;