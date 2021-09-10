import { generateId } from "../Utils/generateId.js";


export class Todo{

    constructor(todoData){
        this.id = todoData.id || generateId()
        this.user = todoData.user
        this.completed = todoData.completed
        this.description = todoData.decription
    }

    get Template(){
        return /*html*/`
        <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
            
            </div>
            
            </div>
        
        </div>
        
        `
    }
    
}
