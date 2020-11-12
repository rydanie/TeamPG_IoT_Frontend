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
import LocalView from "LocalView/LocalView"
import Help from "help/Help";
import EditDevice from "EditDevice/EditDevicesForm"
 
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
            <Route path="/LocalView"><br></br>
              <LocalView />
            </Route>
            <Route path="/help"><br></br>
              <Help />
            </Route>
            <Route path="/EditDevice"><br></br>
              <EditDevice />
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
