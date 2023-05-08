export class AddCityInfo {
    static setIntervalValue = null;

    constructor(cityData, timeZone) {
        this.cityData = cityData;
        this.timeZone = timeZone;
    }

    render() {
        this.addCityDate();
        this.addCityName();
    }

    addCityName() {
        let cityContainer = document.querySelector(".city-name-container");
        cityContainer.innerHTML = '';
        cityContainer.insertAdjacentHTML("beforeend", `<span> ${this.cityData.name}<span>`)
    }

    addCityDate() {
        if (AddCityInfo.setIntervalValue) {
            clearInterval(AddCityInfo.setIntervalValue);
            AddCityInfo.setIntervalValue = null;
        }
        let container = document.querySelector(".data-container");
        if (!AddCityInfo.setIntervalValue) {
            AddCityInfo.setIntervalValue = setInterval(() => {
                container.innerHTML = '';
                container.append(this.createDate());
            }, 1000);
        }

    }

    createDate() {
        let time = this.changeTimeZone(new Date());
        return time.toString().substring(3, time.toString().indexOf("G"));
    }

    changeTimeZone(date) {
        if (typeof date === 'string') {
            return new Date(
                new Date(date).toLocaleString('en-US', {timeZone: this.timeZone}),
            );
        }
        return new Date(
            date.toLocaleString('en-US', {timeZone: this.timeZone}),
        );
    }
}