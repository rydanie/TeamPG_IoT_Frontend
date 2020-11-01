export interface GatewaysState {
    loading: boolean;
    succeed: boolean;
    error?: any;
    Gateways?: Gateway[];
}

export interface Gateway {
    id?: number;
    name?: string;
}