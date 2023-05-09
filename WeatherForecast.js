export class AddForecast{
    constructor(cityForecastData, timeZone) {
        this.cityForecastData = cityForecastData;
        //this.timeZone = timeZone;
    }

    render(){
        document.querySelector(".forecast-info-container").innerHTML = '';
        for(let i = 0; i < 3; i++){
            let container = this.createContainer();
            this.addImages(container, i);
            this.addTemperature(container, i);
            this.addDate(container, i);
            document.querySelector(".forecast-info-container").append(container);
        }
    }
    createContainer(){
        let div = document.createElement("div");
        div.classList.add("forecast__inner");
        return div;
    }
    addImages(container, number){
        let img = new Image(50, 50);
        img.src = 'https://openweathermap.org/img/wn/' + this.cityForecastData.list[number].weather[0]['icon'] + '@2x.png';
        container.append(img);
        container.append(this.cityForecastData.list[number].weather[0].main)
        return container;
    }
    addTemperature(container, number){
        container
            .insertAdjacentHTML("beforeend", `<span>${Math.round(this.cityForecastData.list[number].main.temp - 273.15)} °C </span>`)

    }
    addDate(container, number){
        // let day = new Date().getDate()+ number + 1;
        let date = new Date();
        date.setDate(new Date().getDate() + number + 1);
        container.insertAdjacentHTML("beforeend", `<span>${date.toString().substring(4, 10)}</span>`);

    }




}