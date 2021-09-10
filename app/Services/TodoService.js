import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"


// @ts-ignore
const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})


class TodoService{

    async getTodolist(){
    let res = await api.get('drew/todos')
    console.log('get the todos', res.data)
    ProxyState.todolist = res.data.map(t => new Todo(t))
    }

    async addTask(rawData){
        try {
         const res = await api.post('drew/todos', rawData)
         ProxyState.todolist = [...ProxyState.todolist, new Todo(res.data)]
         this.getTodolist()
         console.log(res)
        } catch (error) {
            
        }
        
    }

constructor(){
    console.log('todo service working')
    
}

}

export const todoService = new TodoService()