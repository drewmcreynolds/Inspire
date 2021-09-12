import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"

// @ts-ignore
const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/drew/todos'
})

class ListsService{
    async getList(){
    let res = await api.get()
    ProxyState.lists = res.data.map(l => new List(l))
    }

    async addTask(listData){
        try {let res = await api.post('', listData)
         ProxyState.lists = [...ProxyState.lists, new List(res.data)]
        } catch (error) {console.error('ADD_TASK_ERROR', error)}        
    }
    async deleteTask(id){
        try {await api.delete(id)
            ProxyState.lists = ProxyState.lists.filter(l => l.id !== id)            
        } catch (error) {console.error('DELETE_TASK_ERROR', error)}
    }
    async toggleFinished(id){
        const res = ProxyState.lists.find(l => l.id === id)
        res.completed = !res.completed
        await api.put(`${id}`, res)
        this.getList()
    }
constructor(){
    console.log('list service working')
    this.getList()    
    }
}
export const listsService = new ListsService()