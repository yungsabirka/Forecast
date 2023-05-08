import {AddCurrentWeather} from "./CurrentWeather.js";
import {AddForecast} from "./WeatherForecast.js";
import {AddCityInfo} from "./CityInfo.js";

export class RenderInfo{

    static setCityButton(cityId, selector, timeZone) {
        let cityWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f`
        let cityForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f`;
        fetch(cityWeatherUrl)
            .then(response => response.json())
            .then(json => {
                document.querySelector(selector).addEventListener("click", function () {
                    new AddCurrentWeather(json).render();
                    new AddCityInfo(json, timeZone).render();
                })
            })
        fetch(cityForecastUrl)
            .then(response => response.json())
            .then(json => {
                document.querySelector(selector).addEventListener("click", function () {
                    new AddForecast(json).render();
                })
            })
    }

}