import { GatewaysState } from "./Gateways-state";
import { GatewaysAction, GatewaysActionType, GatewaysFailedAction, GatewaysChangedAction } from "./Gateways-actions";

const initialState: GatewaysState = {
  loading: false,
  succeed: false,
};

export function GatewaysReducer(
  state: GatewaysState = initialState,
  action: GatewaysAction
): GatewaysState {
  switch (action.type) {
    case GatewaysActionType.LOADING:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case GatewaysActionType.FAILED:
      return {
        ...state,
        error: (action as GatewaysFailedAction).error,
        loading: false,
      };
    case GatewaysActionType.CHANGE_GATEWAYS:
      return {
        ...state,
        devices: (action as GatewaysChangedAction).Gateways,
        loading: false,
        error: undefined,
      };
    default:
      return state;
  }
}
