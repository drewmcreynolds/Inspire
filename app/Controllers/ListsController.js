import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"

 function _drawTodoList(){
    let template = ''
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
    let c = ProxyState.lists.filter(c => c.completed)
    document.getElementById('count').innerHTML = `${c.length} of ${ProxyState.lists.length}`
    console.log(ProxyState.lists)
}

export class ListsController{
    constructor(){
        ProxyState.on('lists', _drawTodoList)
        console.log('lists controller')
    }
    async addTask() {
        event.preventDefault()
        /**
         * @type {HTMLFormElement} */
        //@ts-ignore
        const form = event.target
        const taskData = {description: form.description.value}    
        await listsService.addTask(taskData)
        form.reset()
      }
      async deleteTask(id) {
          // @ts-ignore
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })            
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then( async(result) => {
                if (result.isConfirmed) 
                    {await listsService.deleteTask(id)
                    swalWithBootstrapButtons.fire('Deleted!','Your Task has been deleted.','success')
                    } else if (// @ts-ignore
                    result.dismiss === Swal.DismissReason.cancel)
                    {swalWithBootstrapButtons.fire('Cancelled','Your Task is safe🖖','error')}                            
          })    
      }
        async getList() {
          await listsService.getList()
        }
        async toggleFinished(id) {
          await listsService.toggleFinished(id)
        }
    }