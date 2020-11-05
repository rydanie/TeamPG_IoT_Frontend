import React from "react";
import "./App.css";
import Gateway from "Gateway/Gateways";
import NavigationBar from "./Components/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Devices from "devices/Devices";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/devices">
              <Devices />
            </Route>
            <Route path="/Gateways">
                <Gateway />
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
