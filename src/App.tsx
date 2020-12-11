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
import GlobalView from "GlobalView/GlobalView";
import LocalView from "LocalView/LocalView";
import Help from "help/Help";
import EditDevices from "devices/EditDevices";
import EditGateways from "Gateway/EditGateways";
 
function App() {
  return (
    <div>
      <Router>
        <div>
          <NavigationBar />
          <Switch>
          <Route path="/devices/EditDevices"><br></br>
            <EditDevices />
          </Route>
            <Route path="/devices"><br></br>
              <Devices />
            </Route>
            <Route path="/gateways/EditGateways"><br></br>
                <EditGateways />
            </Route>
            <Route path="/Gateways"><br></br>
              <Gateways />
            </Route>
            <Route path="/global"><br></br>
              <GlobalView />
            </Route>
            <Route path="/LocalView"><br></br>
              <LocalView />
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
