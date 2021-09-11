import { BgController } from "./Controllers/BgController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  
  bgController = new BgController();

  todoController = new TodoController();

  timeController = new TimeController();

  quoteController = new QuoteController();
}

window["app"] = new App();
