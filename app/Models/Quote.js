
export class Quote{
    constructor(qData){
        this.id =  qData._id
        this.tags = qData.tags
        this.content = qData.content
        this.author = qData.author
        this.length = qData.length        
    }
    get Template(){
        return /*html*/`
        <div>
        <h4 data-bs-toggle="tooltip" data-bs-placement="bottom" title="${this.author}" 
        class="text-center text-success card opacity-45 border border-success border-2 bg-dark rounded opacity-75 p-3">"${this.content}"</h4>
        </div>
        `
    }
}