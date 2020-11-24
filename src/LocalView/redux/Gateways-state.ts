export interface GatewaysState {
    loading: boolean;
    succeed: boolean;
    error?: any;
    Gateways?: Gateways[];
}

export interface Gateways {
    id?: number;
    name?: string;
}