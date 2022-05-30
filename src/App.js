import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Gen1 from "./Pages/Gen1";
import Gen2 from "./Pages/Gen2";
import Gen3 from "./Pages/Gen3";
import Gen4 from "./Pages/Gen4";
import Gen4Platinum from "./Pages/Gen4Platinum";
import Gen4Remaster from "./Pages/Gen4Remaster";
import Gen5 from "./Pages/Gen5";
import Gen5Part2 from "./Pages/Gen5Part2 ";
import Gen6 from "./Pages/Gen6";
import Gen6Remaster from "./Pages/Gen6Remaster";
import Gen7 from "./Pages/Gen7";
import Gen7Part2 from './Pages/Gen7Part2';
import Gen8 from './Pages/Gen8';
import GenLetsGo from "./Pages/GenLetsGo";

function App() {
  
  return (
    <>
        <Router>
          <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Gen1" component={Gen1} />
                <Route path="/Gen2" component={Gen2} />
                <Route path="/Gen3" component={Gen3} />
                <Route path="/Gen4" component={Gen4} />
                <Route path="/Gen4-Platinum" component={Gen4Platinum} />
                <Route path="/Gen4-Remaster" component={Gen4Remaster} />
                <Route path="/Gen5" component={Gen5} />
                <Route path="/Gen5-Part2" component={Gen5Part2} />
                <Route path="/Gen6" component={Gen6} />
                <Route path="/Gen6-Remaster" component={Gen6Remaster} />
                <Route path="/Gen7" component={Gen7} />
                <Route path="/Gen7-Part2" component={Gen7Part2} />
                <Route path="/Gen-Lets-Go" component={GenLetsGo} />
                <Route path="/Gen8" component={Gen8} />
          </Switch>
        </Router>
    </>
  );
}

export default App;
