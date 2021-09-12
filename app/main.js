import { BgController } from "./Controllers/BgController.js";
import { ListsController } from "./Controllers/ListsController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { WeatherController } from "./Controllers/WeatherController.js";



class App {
  
  bgController = new BgController();

  listsController = new ListsController();

  timeController = new TimeController();

  quoteController = new QuoteController();
  
  weatherController = new WeatherController();

}

window["app"] = new App();
