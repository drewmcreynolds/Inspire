import { generateId } from "../Utils/generateId.js"

export class BgImage{
    constructor(bgData){
        this.id = bgData.id || generateId()
        this.url = bgData.largeImgUrl
    }

    // get Template(){
    //     return /*html*/`
    //     <div class="col-lg-12">
    //         <img  src="${this.url}" class="img-fluid">
    //     </div>
        
    //     `
    // }
}