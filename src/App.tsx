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
import Gateways from "Gateway/Gateways";
import Help from "help/Help";
 
function App() {
  return (
    <div>
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/devices"><br></br>
              <Devices />
            </Route>
            <Route path="/Gateways"><br></br>
              <Gateways />
            </Route>
            <Route path="/global"><br></br>
              <Devices />
            </Route>
            <Route path="/local"><br></br>
              <Devices />
            </Route>
            <Route path="/help"><br></br>
              <Help />
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
