import { BgController } from "./Controllers/BgController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  
  bgController = new BgController();

  todoConrtroller = new TodoController();
}

window["app"] = new App();
