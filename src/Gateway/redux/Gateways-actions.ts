import { Gateway } from "./Gateways-state";
import { ThunkAction } from "redux-thunk";
import { RootState } from "redux/root-reducer";
import { Action } from "redux";
import GatewaysService from "Gateways/services/Gateways-service";
import { v4 as uuidv4 } from "uuid";

export enum GatewaysActionType {
  LOADING = "GATEWAYS_LOADING",
  FAILED = "GATEWAYS_FAILED",
  CHANGE_GATEWAYS = "GATEWAYS_CHANGE_GATEWAYS",
}

export interface GatewaysLoadingAction {
  type: GatewaysActionType.LOADING;
}

export interface GatewaysFailedAction {
  type: GatewaysActionType.FAILED;
  error: any;
}

export interface GatewaysChangedAction {
  type: GatewaysActionType.CHANGE_GATEWAYS;
  Gateways: Gateway[];
}

export type GatewaysAction = GatewaysLoadingAction | GatewaysFailedAction | GatewaysChangedAction;

function loading(): GatewaysLoadingAction {
  return {
    type: GatewaysActionType.LOADING,
  };
}

function failed(error: any): GatewaysFailedAction {
  return {
    type: GatewaysActionType.FAILED,
    error
  };
}

function changeGateways(Gateways: Gateway[]): GatewaysChangedAction {
  return {
    type: GatewaysActionType.CHANGE_GATEWAYS,
    Gateways
  };
}

type GatewaysThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  Action<GatewaysActionType>
>;

const loadGateways = (): GatewaysThunkAction => async (dispatch, getState) => {
  dispatch(loading());

  try {
    const Gateways: Gateway[] = await GatewaysService.Gateways();

    dispatch(changeGateways(Gateways));
  } catch (e) {
    dispatch(failed(e));
  }
};

const createGateway = (
  name: string,
): GatewaysThunkAction => async (dispatch, getState) => {
  dispatch(loading());

  try {
    const Gateways: Gateway[] = await GatewaysService.create(name);

    dispatch(changeGateways(Gateways));
  } catch (e) {
    dispatch(failed(e));
  }
};


export const actions = {
  loadGateways,
  createGateway,
};
