import { ProxyState } from "../AppState.js"
import { bgService } from "../Services/BgService.js"

function _drawBg(){

     document.getElementById('bgimg').style.backgroundImage = `url('${ProxyState.bgimg.url}')`
}

export class BgController{
    constructor(){
        ProxyState.on('bgimg', _drawBg)
        bgService.getBgimage()

    }

    
}