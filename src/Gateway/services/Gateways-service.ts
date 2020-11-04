import axios, { AxiosInstance } from "axios";
import { Gateways } from "Gateway/redux/Gateways-state";

class GatewaysService {
    private http: AxiosInstance;
    constructor(baseUrl: string) {
        this.http = axios.create({
            baseURL: baseUrl,
        });
    }

    async create(name: string,): Promise<Gateways[]> {
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
            };
        });
    }

}

const gatewaysService = new GatewaysService(//this error solution is
//https://stackoverflow.com/questions/41944650/this-implicitly-has-type-any-because-it-does-not-have-a-type-annotation
    "http://localhost:8080/gateways"
);
export default gatewaysService;
