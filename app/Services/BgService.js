import { ProxyState } from "../AppState.js"
import { BgImage } from "../Models/BgImage.js"


// @ts-ignore
const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})

class BgService{

    async getBgimage(){
        let res = await api.get(`images`)
        console.log ('get the image', res)
        ProxyState.bgimg = new BgImage(res.data)
    }

    

}

export const bgService = new BgService()