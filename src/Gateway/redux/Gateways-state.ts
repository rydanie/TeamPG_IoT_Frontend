export interface GatewaysState {
    loading: boolean;
    succeed: boolean;
    error?: any;
    Gateways?: Gateways[];
}

export interface Gateways {
    macId?: number;
    name?: string;
    ipAdd?: number;
}