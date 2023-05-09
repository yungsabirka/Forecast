export class AddCurrentWeather {
    constructor(cityData) {
        this.cityData = cityData;
    }

    render() {
        this.addWeatherImage();
        this.addTemperature();
    }

    addWeatherImage() {
        let img = new Image();
        img.src = 'https://openweathermap.org/img/wn/' + this.cityData.weather[0]['icon'] + '@2x.png';
        document.querySelector(".weather-image-container").innerHTML = '';
        document.querySelector(".weather-image-container").append(img);
        document.querySelector(".weather-image-container").insertAdjacentHTML("beforeend", this.cityData.weather[0].main)
    }

    addTemperature() {
        document.querySelector(".main-temperature").innerHTML = '';
        document.querySelector(".main-temperature").append(Math.round(this.cityData.main.temp - 273.15) + "°C");
    }
}
