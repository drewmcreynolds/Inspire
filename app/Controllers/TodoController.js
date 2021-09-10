import { ProxyState } from "../AppState.js"
import { todoService } from "../Services/TodoService.js"

function _drawTodoList(){
    let template = ''
    ProxyState.todolist.forEach(t => template += t.Template)
    document.getElementById('todolist').innerHTML = template
}

export class TodoController{
    constructor(){
        ProxyState.on('todolist', _drawTodoList)
        console.log('hello from the todo controller')
        todoService.getTodolist()
    }
}