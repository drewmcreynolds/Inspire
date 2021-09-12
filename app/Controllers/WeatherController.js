import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

 

function _drawWeather(){
    document.getElementById('weather').innerHTML = ProxyState.weather.Template
}
function _drawTemperature(){
    if(ProxyState.weather.temp == 'fahrenheit'){
        document.getElementById('temperatureChange').innerHTML = `${ProxyState.weather.fahrenheit}°F`
    }else if(ProxyState.weather.temp == 'celsius'){
        document.getElementById('temperatureChange').innerHTML =`${ProxyState.weather.celsius}°C`
    }else{
        document.getElementById('temperatureChange').innerHTML = `${ProxyState.weather.kelvin}°K`
    
}
}
export class WeatherController{
    temperatureDefault = 'fahrenheit'
    constructor(){
        console.log('say hi to the weather controller')
        ProxyState.on('weather', _drawWeather)
        this.getWeather()
    }
    temperatureChange(){
        weatherService.temperatureType()
        _drawTemperature()
    }
    getWeather(){
        weatherService.getWeather()
    }
}