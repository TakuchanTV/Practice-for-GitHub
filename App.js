//App.js//

import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./Home";
import { Router } from "./router/Router";

const HomePage = () => {
  <div className="App">
   <Home />
  </div>
};

const App = () => {
  return(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}


export default  App;