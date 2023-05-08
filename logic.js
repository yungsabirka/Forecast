import {RenderInfo} from "./RenderInfo.js";

let kyivId = 703448;
let londonId = 2643743;
let newYorkId = 5128638;

RenderInfo.setCityButton(londonId, ".london-info", "Europe/London");
RenderInfo.setCityButton(kyivId,".kiev-info", "Europe/Kyiv");
RenderInfo.setCityButton(newYorkId, ".new-york-info", 'America/New_York')

document.querySelector(".temperature-scale-button")
    .addEventListener("click", function (){
        let temperature = document.querySelector(".main-temperature").textContent;
        if(temperature[temperature.length-1] !== "F"){
            changeTemperature("°F",".main-temperature", document)
            document.querySelectorAll(".forecast__inner")
                .forEach(el => changeTemperature("°F","span", el));
        }

})
document.querySelectorAll(".temperature-scale-button")[1]
    .addEventListener("click", function (){
        let temperature = document.querySelector(".main-temperature").textContent;
        if(temperature[temperature.length-1] !== "C"){
            changeTemperature("°C",".main-temperature", document)

            document.querySelectorAll(".forecast__inner")
                .forEach(mainContainer => changeTemperature("°C","span", mainContainer));
        }

    })

function changeTemperature(Scale, container, mainContainer){
    let currentTemperature = mainContainer.querySelector(container).textContent;
    let newTemperature;
    if(Scale === "°C")
        newTemperature = Math.round((currentTemperature.substring(0, currentTemperature.indexOf("°")) - 32 )*5/9);
    else
        newTemperature = Math.round((currentTemperature.substring(0, currentTemperature.indexOf("°")) * 1.8 )+32);
    mainContainer.querySelector(container).innerHTML = '';
    mainContainer.querySelector(container).append(newTemperature + Scale);
}

window.onload = function (){
    setTimeout(() => document.querySelector(".kiev-info").click(), 200);
}


