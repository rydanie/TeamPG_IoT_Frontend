import React from "react";

import {
    Table,
} from "reactstrap";
import { Gateway } from "./redux/Gateways-state";

interface GatewaysTableProps {
<<<<<<< HEAD:src/Gateway/GatewaysTable.tsx
    Gateways?: Gateway[];
=======
        Gateways?: Gateway[];
>>>>>>> 53aecffd151c6e871747f41b4c65ce6d99cee5b7:src/Gateway/DevicesTable.tsx
}

export function GatewaysTable({ Gateways }: GatewaysTableProps): JSX.Element {
    return <Table className="align-items-center" responsive hover striped>
        <thead className="thead-light">
            <tr>
                {["Name"].map((name) => (
                    <th scope="col">{name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {Gateways?.map((Gateway) => {
                return (
                    <tr key={Gateway.id}>
                        <th scope="row">
                            {Gateway.name}
                        </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}