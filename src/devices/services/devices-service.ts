import axios, { AxiosInstance } from "axios";
import { Device } from "devices/redux/devices-state";

class DevicesService {
    private http: AxiosInstance;
    constructor(baseUrl: string) {
        this.http = axios.create({
            baseURL: baseUrl,
        });
    }

    async create(name: string, macAdd: string, conName: string): Promise<Device[]> {
        /*
        await this.http.post(
            "/",
            { name, macAdd, conName},
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );*/

        axios.post("http://localhost:3000/device",{
            "name": name,
            "macAdd": macAdd,
            "conName": conName,
        });

        return await this.devices();
    }

    async devices(): Promise<Device[]> {
        const result = await this.http.get(
            "/getDevices",
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

        /*this is where it gets all of the info for device*/
        return data.map((device: any) => {
            return {
                id: device.id,
                name: device.name,
                macAdd: device.macAdd,
                conName: device.conName,
            };
        });
    }

}

const devicesService = new DevicesService(
    "http://localhost:8080/devices"
);
export default devicesService;
