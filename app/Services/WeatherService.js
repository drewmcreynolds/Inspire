import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"


// @ts-ignore
const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})

class WeatherService{
    constructor(){
        console.log('weather service working')
    }
    async getWeather(){
        let res = await api.get('weather')
        console.log('get the weather', res)
        ProxyState.weather = new Weather(res.data)
    }
    temperatureType(){
        let k = 'kelvin'
        let c = 'celsius'
        let f = 'fahrenheit'
        if(ProxyState.weather.temp == f){
            ProxyState.weather.temp = c
        }else if(ProxyState.weather.temp == c){
            ProxyState.weather.temp = k
        }else{
            ProxyState.weather.temp = f
        }
    }
}

export const weatherService = new WeatherService();