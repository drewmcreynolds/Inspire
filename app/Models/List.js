


export class List{

    constructor(listData){
        this.id = listData._id
        this.user = listData.user
        this.completed = listData.completed
        this.description = listData.description
        this.id = listData.id
    }

    get Template(){
        return /*html*/ `
        <form class="text-center d-flex justify-content-around">
        <input class="mt-2" type="checkbox" id="${this.id}" name="checkbox" ${this.completed ? 'checked' : ''} onclick="app.listsController.toggleFinished('${this.id}')">
        <label for="checkbox">
        <h5 class="m-0">
        ${this.description}
        </h5>
        </label>
        <i class="mdi mdi-delete-alert-outline text-danger 24px" onclick="app.listsController.deleteTask('${this.id}')"></i>      
        
        </form>

    
    `
    }
        
}
