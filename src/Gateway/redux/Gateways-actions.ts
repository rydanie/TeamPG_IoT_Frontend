import { Gateways } from "./Gateways-state";
import { ThunkAction } from "redux-thunk";
import { RootState } from "redux/root-reducer";
import { Action } from "redux";
import GatewaysService from "Gateway/services/Gateways-service";
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
  Gateways: Gateways[];
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

function changeGateways(Gateways: Gateways[]): GatewaysChangedAction {
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
    const Gateways: Gateways[] = await GatewaysService.Gateways();

    dispatch(changeGateways(Gateways));
  } catch (e) {
    dispatch(failed(e));
  }
};

    const createGateways = (
        name: string, macAdd: string, ipAdd: string
    ): GatewaysThunkAction => async (dispatch, getState) => {
    dispatch(loading());

  try {
    const Gateways: Gateways[] = await GatewaysService.create(name, macAdd, ipAdd);

    dispatch(changeGateways(Gateways));
  } catch (e) {
    dispatch(failed(e));
  }
};


export const actions = {
  loadGateways,
  createGateways,
};
