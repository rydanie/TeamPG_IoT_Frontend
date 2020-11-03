import { combineReducers } from "redux";
import { systemReducer } from "./system-reducer";
import { devicesReducer } from "../devices/redux/devices-reducer";
import { GatewaysReducer } from "../Gateway/redux/Gateways-reducer";

const rootReducer = combineReducers({
  Gateways: GatewaysReducer,
  devices: devicesReducer,
  system: systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
