import axios, { AxiosInstance } from "axios";
import { Gateway } from "Gateway/redux/Gateway-state";

class GatewayService {
    private http: AxiosInstance;
    constructor(baseUrl: string) {
        this.http = axios.create({
            baseURL: baseUrl,
        });
    }

    async create(name: string,): Promise<Gateway[]> {
        await this.http.post(
            "/",
            { name, },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );

        return await this.Gateway();
    }

    async Gateways(): Promise<Gateway[]> {
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

        return data.map((Gateway: any) => {
            return {
                id: Gateway.id,
                name: Gateway.name,
            };
        });
    }

}

const GatewayService = new GatewayService(
    "http://localhost:8080/Gateway"
);
export default GatewayService;
