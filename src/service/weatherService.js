class WeatherService {
    constructor() {

    };

    getNewsList = () => {
        let newsList = [
            {
                "id": 1,
                "title": "test"
            }
        ];

        fetch('https://easywaldo-test-api.azurewebsites.net/weatherForecast/GetWeatherNews', {
                mode: 'no-cors',
            })
            .then(function (response) {
                newsList = response;
                console.log(response);
                return newsList;
            });
        return newsList;
    };
}

export default WeatherService;