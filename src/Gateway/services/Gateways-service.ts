import axios, { AxiosInstance } from "axios";
import { Gateways } from "Gateway/redux/Gateways-state";

class GatewaysService {
    private http: AxiosInstance;
    constructor(baseUrl: string) {
        this.http = axios.create({
            baseURL: baseUrl,
        });
    }

    async create(name: string/*, macAdd: string, ipAdd: string*/): Promise<Gateways[]> {
        await this.http.post(
            "/",
            { name/*, macAdd, ipAdd*/},
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );

        return await this.Gateways();
    }

    async Gateways(): Promise<Gateways[]> {
        const result = await this.http.get(
            "/",
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );

        const data = result.data;

        if (data === undefined) {
            return Promise.resolve([]);
        }

        return data.map((Gateways: any) => {
            return {
                id: Gateways.id,
                name: Gateways.name,
                macAdd: Gateways.macAdd,
                ipAdd: Gateways.ipAdd
            };
        });
    }

}

const gatewaysService = new GatewaysService(
    "http://localhost:8080/gateway"
);
export default gatewaysService;
