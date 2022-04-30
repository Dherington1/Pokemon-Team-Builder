import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Gen1 from "./Pages/Gen1";
import Gen2 from "./Pages/Gen2";
import Gen3 from "./Pages/Gen3";
import Gen4 from "./Pages/Gen4";

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
          </Switch>
        </Router>
    </>
  );
}

// Red n Blue
// Gold/Silver/Crystal
// Ruby/Sapphire/Emerald
// Diamond/Pearl

export default App;
