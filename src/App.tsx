import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Devices from "devices/Devices";
import Help from "help/Help";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/devices">//url
              <Devices />
            </Route>
            <Route path="/Gateways">//url
              <Devices />
            </Route>
            <Route path="/global">//url
              <Devices />
            </Route>
            <Route path="/local">//url
              <Devices />
            </Route>
            <Route path="/help">//url
              <Help />
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
