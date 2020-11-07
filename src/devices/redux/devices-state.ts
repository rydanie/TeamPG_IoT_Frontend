export interface DevicesState {
    loading: boolean;
    succeed: boolean;
    error?: any;
    devices?: Device[];
}

/*variables are declared here*/
export interface Device {
    id?: number;
    name?: string;
    macAdd ?: string;
    conName ?: string;
}