import React from "react";

import {
    Table,
} from "reactstrap";
import { Gateway } from "./redux/Gateways-state";

interface GatewaysTableProps {
    Gateways?: Gateway[];
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
                    <tr key={device.id}>
                        <th scope="row">
                            {device.name}
                        </th>
                    </tr>
                );
            })}
        </tbody>
    </Table>;
}