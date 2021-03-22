
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './asset/css/custom.css'
import renderRouter from "./core/routerConfig";
import routers from "./routers";
function App() {
  return (
    <BrowserRouter>
      
    {renderRouter(routers)}
       
    </BrowserRouter>
  );
}

export default App;
