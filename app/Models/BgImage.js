import { generateId } from "../Utils/generateId.js"

export class BgImage{
    constructor(bgData){
        this.id = bgData.id || generateId()
        this.url = bgData.largeImgUrl
    }
}