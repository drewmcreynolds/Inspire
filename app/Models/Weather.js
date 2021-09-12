

export class Weather{
    constructor(wData){
        this.id = wData.id
        this.kelvin = wData.main.temp
        this.celsius = Math.floor(wData.main.temp - 273.15)
        this.fahrenheit = Math.floor(((wData.main.temp - 273.15)*9)/5+32)
        this.temp = 'fahrenheit'
        this.name = wData.name
        this.icon = wData.weather.icon
        this.weather = wData.weather
    }
    get Template(){
        return /*html*/`
        <div onclick="app.weatherController.temperatureChange()">
        <h3 class="m-0">${this.name}<img src="http://openweathermap.org/img/wn/${this.weatherIcon()}@2x.png">
        <span id="temperatureChange">${this.fahrenheit}℉</span></h3>        
        </div>        
        `
    }
    weatherIcon() {
        let template = ""
        this.weather.forEach(w => template += `${w.icon}`)
        return template
    }
}