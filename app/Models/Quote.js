
export class Quote{
    constructor(qData){
        this.id =  qData._id
        this.tags = qData.tags
        this.content = qData.content
        this.author = qData.author
        this.aurthorSlug = qData.aurthorSlug
        this.length = qData.length
        this.dateAdded = qData.dateAdded
        this.dateModified = qData.dateModified
    }
    get Template(){
        return /*html*/`
        <div>
        <h4 data-bs-toggle="tooltip" data-bs-placement="bottom" title="${this.author}" class="text-center card opacity-45 border border-success border-2 bg-dark rounded opacity-75 p-3 middlequote">"${this.content}"</h4>
        </div>
        `
    }
}